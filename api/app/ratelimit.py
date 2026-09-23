"""Per-client sliding windows plus a global daily budget on model calls.

Counters are per process and reset on restart; they bound cost on a single-replica Space and
are not a billing ceiling. Set a spend limit in the Anthropic console as well.
"""
from __future__ import annotations

import threading
import time
from collections import defaultdict, deque
from datetime import datetime, timezone


class SlidingWindow:
    def __init__(self, limit: int, seconds: float, clock=time.monotonic) -> None:
        self.limit, self.seconds, self.clock = limit, seconds, clock
        self.hits: dict[str, deque[float]] = defaultdict(deque)
        self.lock = threading.Lock()

    def allow(self, key: str) -> bool:
        now = self.clock()
        with self.lock:
            q = self.hits[key]
            while q and now - q[0] > self.seconds:
                q.popleft()
            if len(q) >= self.limit:
                return False
            q.append(now)
            if len(self.hits) > 20000:  # bound memory under abuse
                for k in [k for k, v in self.hits.items() if not v][:5000]:
                    del self.hits[k]
            return True


class DailyBudget:
    def __init__(self, limit: int, today=lambda: datetime.now(timezone.utc).date()) -> None:
        self.limit, self.today = limit, today
        self.day, self.used = today(), 0
        self.lock = threading.Lock()

    def take(self) -> bool:
        with self.lock:
            d = self.today()
            if d != self.day:
                self.day, self.used = d, 0
            if self.used >= self.limit:
                return False
            self.used += 1
            return True

    @property
    def remaining(self) -> int:
        return max(0, self.limit - self.used) if self.day == self.today() else self.limit

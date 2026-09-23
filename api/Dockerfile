# Interview My Work API — Hugging Face Docker Space (CPU basic).
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1
# Hugging Face runs Spaces as uid 1000.
RUN useradd --create-home --uid 1000 app
WORKDIR /home/app/api

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY --chown=app:app app ./app
USER app

EXPOSE 7860
HEALTHCHECK --interval=60s --timeout=5s CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:7860/api/health', timeout=4)"
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860", "--proxy-headers", "--forwarded-allow-ips", "*", "--no-access-log"]

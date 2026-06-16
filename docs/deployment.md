# Deployment Guide

## Frontend: Vercel

Deploy from the repository root.

Build settings:

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build --workspace @second-homes/web`
- Environment variable: `NEXT_PUBLIC_API_URL`

Local production check:

```bash
npm run build --workspace @second-homes/web
```

Health check:

```text
/api/health
```

## Backend: Docker Host, ECS, Railway, Render, or Fly.io

Build the API image from the repository root:

```bash
docker build -f Dockerfile.api -t second-homes-api .
```

Run locally:

```bash
docker run --env-file apps/api/.env.example -p 4000:4000 second-homes-api
```

Health check:

```text
/api/health
```

Swagger:

```text
/docs
```

## Production AWS Mapping

- API container: Amazon ECS Fargate
- Database: Amazon RDS PostgreSQL
- Cache: Amazon ElastiCache Redis
- Media: Amazon S3
- CDN: Amazon CloudFront
- WAF: AWS WAF
- Video workers: ECS service or queue-triggered worker service

## Required Production Secrets

Web:

- `NEXT_PUBLIC_API_URL`

API:

- `NODE_ENV`
- `PORT`
- `WEB_ORIGIN`
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`
- `AWS_REGION`
- `AWS_S3_BUCKET`
- `AWS_CLOUDFRONT_URL`

## Deployment Order

1. Deploy the API and confirm `/api/health`.
2. Add the API URL to Vercel as `NEXT_PUBLIC_API_URL`.
3. Deploy the web app and confirm `/api/health`.
4. Configure custom domains.
5. Add S3, CloudFront, RDS, Redis, and WAF once real persistence is implemented.

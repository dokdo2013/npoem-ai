# N행시 AI Generator (npoem.kr)

OpenAI API를 활용한 N행시 AI Generator

## Technologies

- Monorepo : Pnpm workspace, Turborepo
- Frontend : Next.js, Shadcn UI
- Backend : NestJS, Sequelize
- Database : MySQL (Planetscale), Redis (Upstash)
- Object Storage : Cloudflare R2
- DevOps : Vercel, Kubernetes, GitHub Actions, DockerHub
- Etc : Sentry (Self-Hosted), Grafana

## Local Development Guide

```sh
# Install Pnpm
npm i -g pnpm

# Install dependencies
pnpm i

# Start Development Server (8080: web, 8081: api)
pnpm dev

# Start Web Development Server
pnpm web dev

# Start Api Development Server
pnpm api dev
```

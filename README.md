# N행시 AI Generator (npoem.kr)

OpenAI API를 활용한 N행시 AI Generator

## 요구사항 정리

### 정책

- 2글자 ~ 5글자의 텍스트를 입력해서 n행시 생성 가능
- IP당 n행시 생성은 일 10회까지 가능
- IP당 n행시 + 이미지 생성은 일 1회만 가능
- 생성제한 횟수 초기화는 KST 기준 자정에 수행 (Cronjob)

### 파트별 요구사항

- Frontend
  - 따로 로그인 기능 제공하지 않음
  - Turnstile로 비정상, 봇을 통한 접근 제한
- Backend
  - IP 기반 호출 횟수 제어
  - OpenAI API 연동
  - 호출한 데이터 DB/R2 등에 저장
- Infra
  - Cloudflare WAF

## Technologies

- Monorepo : Pnpm workspace, Turborepo
- Frontend : Next.js, Tailwind CSS, Shadcn UI
- Backend : NestJS, Sequelize
- Database : MySQL (Planetscale), Redis (Upstash)
- Message Broker : Kafka
- Object Storage : Cloudflare R2
- Infra & CI/CD : Vercel, Kubernetes, GitHub Actions, DockerHub, Sealed Secrets, Cloudflare
- APM/RUM : Elastic Cloud
- Analytics : Google Analytics, Microsoft Clarity
- Etc : Sentry (Self-Hosted), Grafana, Cloudflare Turnstile

## Local Development Guide

### Prerequiste

- Node.js 20+
- Environment Variable Setting (see `/apps/api/.env.skel`)

### Scripts

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

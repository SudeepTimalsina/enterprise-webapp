FROM node:22-alpine AS base

RUN corepack enable

WORKDIR /app


# -------------------------
# Install dependencies
# -------------------------

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/web/package.json apps/web/package.json

COPY packages ./packages

RUN pnpm install --frozen-lockfile


# -------------------------
# Build application
# -------------------------

FROM deps AS builder

COPY apps/web apps/web

RUN pnpm --filter web build


# -------------------------
# Production image
# -------------------------

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production


COPY --from=builder \
/app/apps/web/.next/standalone ./

COPY --from=builder \
/app/apps/web/.next/static \
./apps/web/.next/static


COPY --from=builder \
/app/apps/web/public \
./apps/web/public


EXPOSE 3000


CMD ["node","apps/web/server.js"]
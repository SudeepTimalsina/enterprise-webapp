FROM node:22-alpine AS base

RUN corepack enable

WORKDIR /app


FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/admin/package.json apps/admin/package.json

COPY packages ./packages


RUN pnpm install --frozen-lockfile



FROM deps AS builder


COPY apps/admin apps/admin


RUN pnpm --filter admin build



FROM node:22-alpine AS runner


WORKDIR /app


ENV NODE_ENV=production


COPY --from=builder \
/app/apps/admin/.next/standalone ./


COPY --from=builder \
/app/apps/admin/.next/static \
./apps/admin/.next/static


COPY --from=builder \
/app/apps/admin/public \
./apps/admin/public


ENV PORT=3001 
EXPOSE 3001


CMD ["node","apps/admin/server.js"]
# syntax=docker/dockerfile:1
# =============================================================================
# TrackFlow — Dockerfile applicatif (production future)
# =============================================================================
# En local, ne PAS builder cette image : utilisez uniquement
#   docker compose up -d
# pour démarrer PostgreSQL (conteneur "trackflow").
#
# Ce Dockerfile servira plus tard au déploiement de l'app Next.js.
# Build (depuis la racine du projet) :
#   docker build -f setup/Dockerfile -t trackflow-app .
# =============================================================================

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]

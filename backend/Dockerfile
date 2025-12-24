# =========================
# Builder stage
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY src ./src
COPY seed.js .

# =========================
# Runtime stage
# =========================
FROM node:20-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy app from builder
COPY --from=builder /app /app

# Fix permissions
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

CMD ["node", "src/server.js"]

# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runtime
WORKDIR /app

# Only production deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy built files
COPY --from=build /app/dist ./dist

# Expose port and run
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]

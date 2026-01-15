# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
# Set API base for production container; override via docker-compose env if needed
ENV VITE_API_BASE=http://localhost:3000
RUN npm run build

# --- Nginx runtime ---
FROM nginx:alpine AS runtime
# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Configure Nginx to serve static files
# and optionally proxy /greetings to backend if you prefer same origin
# For simplicity, we’ll keep CORS by calling backend via its own port.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Docker File Explanations

## 1. `docker-compose.yml`

This file orchestrates multiple services (backend and frontend) together. It defines how containers are built, networked, and run.

```yaml
version: "3.9"
services:
  server:
    build:
      context: ./server
    image: hello-server
    container_name: hello-server
    ports:
      - "3000:3000"
    environment:
      - PORT=3000

  client:
    build:
      context: ./client
    image: hello-client
    container_name: hello-client
    ports:
      - "8080:80"
    environment:
      - VITE_API_BASE=http://server:3000
    depends_on:
      - server
```

### Key Points

- **version: "3.9"** – Compose file format version.
- **services** – Defines two services: `server` (backend) and `client` (frontend).
- **server**
  - `build.context: ./server` – Builds the image using the Dockerfile inside the `server` folder.
  - `image: hello-server` – Names the built image.
  - `container_name: hello-server` – Assigns a fixed container name.
  - `ports: "3000:3000"` – Maps host port 3000 to container port 3000.
  - `environment: PORT=3000` – Sets environment variable for the backend.
- **client**
  - `build.context: ./client` – Builds the image using the Dockerfile inside the `client` folder.
  - `image: hello-client` – Names the built image.
  - `container_name: hello-client` – Assigns a fixed container name.
  - `ports: "8080:80"` – Maps host port 8080 to container port 80 (Nginx).
  - `environment: VITE_API_BASE=http://server:3000` – Configures frontend to call backend using Docker’s internal network hostname (`server`).
  - `depends_on: server` – Ensures backend starts before frontend.

This file allows to run both services together with one command:

```bash
docker compose up --build
```

---

## 2. `server/Dockerfile`

This file builds and runs the backend (Node.js + TypeScript).

```dockerfile
# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runtime
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist

ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

### Key Points

- **Multi‑stage build** – Keeps final image small.
- **Build stage**
  - Uses `node:20-alpine` (lightweight Node.js).
  - Installs dependencies (`npm ci`).
  - Copies TypeScript source and compiles (`npm run build`).
- **Runtime stage**
  - Uses fresh `node:20-alpine`.
  - Installs only production dependencies (`npm ci --omit=dev`).
  - Copies compiled JS files from build stage.
  - Sets environment variable `PORT=3000`.
  - Exposes port 3000.
  - Runs the app with `node dist/index.js`.

This ensures the backend runs efficiently with only what’s needed in production.
This file allows to build backend

```bash
docker build -t hello-server .
```

and run it with command:

```bash
docker run --rm -p 3000:3000 hello-server
```

---

## 3. `client/Dockerfile`

This file builds and serves the frontend (React + Vite + Tailwind).

```dockerfile
# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
ENV VITE_API_BASE=http://localhost:3000
RUN npm run build

# --- Nginx runtime ---
FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Key Points

- **Build stage**
  - Uses `node:20-alpine`.
  - Installs dependencies (`npm ci`).
  - Copies all project files.
  - Sets environment variable `VITE_API_BASE` (default API base URL).
  - Builds static frontend assets (`npm run build`).
- **Runtime stage**
  - Uses `nginx:alpine` (lightweight web server).
  - Copies built static files (`dist`) into Nginx’s default HTML directory.
  - Exposes port 80.
  - Runs Nginx in foreground (`daemon off`).

This produces a minimal image that serves the React app as static files via Nginx.
This file allows to build frontend

```bash
docker build -t hello-client .
```

and run it with command:

```bash
docker run --rm -p 8080:80 hello-client
```

---

# Summary

- **`server/Dockerfile`** – Builds and runs the Node.js backend using a multi‑stage build for efficiency.
- **`client/Dockerfile`** – Builds React frontend assets and serves them with Nginx.
- **`docker-compose.yml`** – Orchestrates backend and frontend together, wiring ports and environment variables.

---

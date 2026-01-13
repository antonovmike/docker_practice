# Full Setup Guide for `docker_practice`

## 1. Clone the Repository

```bash
git clone https://github.com/antonovmike/docker_practice.git
cd docker_practice
```

The project contains two subfolders:

- `server` → Node.js + TypeScript backend
- `client` → React + Vite + Tailwind frontend

---

## 2. Backend (Server) – Run Locally

### Install dependencies

```bash
cd server
npm install
```

### Run in development mode

```bash
npm run dev
```

### Test the endpoint

Open in browser or curl:

```bash
curl http://localhost:3000/greetings
# Response: Hello
```

---

## 3. Frontend (Client) – Run Locally

### Install dependencies

```bash
cd ../client
npm install
```

### Tailwind CSS setup

Tailwind v4 requires `@tailwindcss/postcss`. Install and configure:

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

`postcss.config.js`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

`tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

`src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add to `~/.config/Code/User/settings.json` line `"css.lint.unknownAtRules": "ignore",` to avoid VSCode warning.

### Run in development mode

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

You should see the **Greetings** UI and the backend response `"Hello"`.

---

## 4. Docker Setup and Configuration

### Install Docker Engine

On Ubuntu:

```bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable --now docker
```

### Install Docker Compose V2

If you have the old Python version, remove it:

```bash
sudo apt remove docker-compose
```

Install Compose V2 plugin:

```bash
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose
```

Verify:

```bash
docker compose version
# Docker Compose version v2.24.6
```

---

## 5. Backend – Run in Docker

From `server/`:

```bash
docker build -t hello-server .
docker run --rm -p 3000:3000 hello-server
```

Test:

```bash
curl http://localhost:3000/greetings
# Response: Hello
```

---

## 6. Frontend – Run in Docker

From `client/`:

```bash
docker build -t hello-client .
docker run --rm -p 8080:80 hello-client
```

Open in browser:

```bash
http://localhost:8080
```

---

## 7. Run the Whole Service with Docker Compose

At project root (`docker_practice/`), use the provided `docker-compose.yml`:

```yaml
version: "3.9"
services:
  server:
    build: ./server
    image: hello-server
    container_name: hello-server
    ports:
      - "3001:3000" # host:container
    environment:
      - PORT=3000

  client:
    build: ./client
    image: hello-client
    container_name: hello-client
    ports:
      - "8080:80"
    environment:
      - VITE_API_BASE=http://server:3000
    depends_on:
      - server
```

### Start everything

```bash
docker compose up --build
```

### Access services

- Backend: `http://localhost:3001/greetings` → `"Hello"`
- Frontend: `http://localhost:8080` → React app showing `"Greetings"` and backend response

---

# Summary

- **Local run:** `npm run dev` in `server` and `client`.
- **Docker run:** `docker build` + `docker run` for each service.
- **Full stack:** `docker compose up --build` runs both together.
- **Docker setup:** remove old `docker-compose`, install Docker Engine + Compose V2 plugin, verify with `docker compose version`.

---

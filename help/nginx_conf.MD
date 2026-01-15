# How `client/nginx.conf` Works

## Server Block

```nginx
server {
  listen 80;
  server_name localhost;

  root /usr/share/nginx/html;

  location / {
    try_files $uri /index.html;
  }
}
```

### `listen 80;`

- Instructs Nginx to listen for HTTP requests on port **80** inside the container.
- This is the standard port for web traffic.

### `server_name localhost;`

- Defines the hostname for this server block.
- In Docker, this is mostly symbolic since requests are routed by port mapping (`8080:80` in your `docker-compose.yml`).

### `root /usr/share/nginx/html;`

- Sets the directory where Nginx will look for static files.
- Your React/Vite build output (`dist`) is copied here in the Dockerfile.

### `location / { ... }`

- Handles all requests to the root path (`/`) and any subpaths (`/cheatsheet`, `/about`, etc.).

#### `try_files $uri /index.html;`

- First, Nginx checks if the requested path (`$uri`) matches a real file in `/usr/share/nginx/html`.
- If the file exists (e.g., `/style.css`, `/main.js`), it is served directly.
- If the file does **not** exist (e.g., `/cheatsheet`), Nginx falls back to serving `/index.html`.
- This ensures that **client-side routing** (React Router) can handle the path and render the correct page.

---

## Why This Fixes SPA Routing

- Without this config, Nginx returns `404 Not Found` for routes like `/cheatsheet` because no physical file exists.
- With `try_files $uri /index.html;`, Nginx always serves `index.html` for unknown paths, allowing React Router to interpret the URL and display the correct component.

---

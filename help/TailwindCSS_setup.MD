# TailwindCSS Setup with Vite

### 1. Install dependencies

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
```

---

### 2. Create `client/postcss.config.js`

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

---

### 3. Create `client/tailwind.config.js`

```js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

---

### 4. Import Tailwind in `client/src/index.css`

```css
@import "tailwindcss";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

The `@import "tailwindcss";` line is essential — without it, Tailwind won’t inject its utilities.

---

### 5. Import CSS in the entry file (`client/src/main.tsx`)

```tsx
import "./index.css";
```

---

### 6. Run the project

```bash
npm run dev
```

Open in browser:

- `http://localhost:5173` → main app
- `http://localhost:5173/cheatsheet` → cheat sheet page with Tailwind styles applied

---

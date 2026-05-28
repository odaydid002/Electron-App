# Electron React TypeScript Tailwind Template

A modern desktop application boilerplate built with Electron, React, TypeScript, Vite, and Tailwind CSS.

This project provides a clean architecture for building fast, scalable, and modern cross-platform desktop applications using web technologies.

---

# ✨ Features

- ⚡ Electron for desktop application development
- ⚛️ React + Vite frontend
- 🔷 TypeScript support
- 🎨 Tailwind CSS integration
- 🔥 Fast HMR with Vite
- 🪟 Cross-platform support
- 📦 Separate Electron and React build outputs
- 🧩 Clean and scalable folder structure
- 🔒 Ready for secure Electron practices

---

# 📁 Project Structure

```bash
electron-app/
│
├── dist-electron/          # Compiled Electron files
├── dist-react/             # Built React frontend
│
├── src/
│   ├── electron/           # Electron main process
│   │   ├── main.ts
│   │   └── tsconfig.json
│   │
│   ├── assets/             # Static assets
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── vite.config.ts
├── types.d.ts            # Global TypeScript declarations
├── tsconfig.json
├── package.json
└── README.md
```

---

# 🛠️ Technologies Used

- Electron
- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Custom root `types.d.ts` for shared type declarations

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/odaydid002/Electron-App.git
cd electron-app
```

---

## 2. Install Dependencies

```bash
npm install
```

---

# 💻 Development

This project uses a parallel development workflow where the React dev server and Electron app run together.

---

## Start Development

```bash
npm run dev
```

This runs the Vite frontend and Electron app in parallel for a seamless development experience.

---

## Alternative: Run Servers Separately

If you prefer separate terminals, start the Vite server first:

```bash
npm run dev:r
```

Then launch Electron in a second terminal:

```bash
npm run dev:e
```

---

# 📦 Build Project

## Build Project

```bash
npm run build
```

This command cleans old builds, compiles TypeScript, transpiles the Electron main process, and builds the React frontend.

Output directories:

```bash
/dist-react
/dist-electron
```

You can also compile only the Electron main process:

```bash
npm run transpile:electron
```

And clean generated build folders with:

```bash
npm run clean
```

---

# 🔍 Preview Production Build

```bash
npm run preview
```

---

# 🧹 Linting

```bash
npm run lint
```

---

# 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run clean` | Remove `dist-react` and `dist-electron` folders |
| `npm run dev` | Run the React dev server and Electron app in parallel |
| `npm run dev:r` | Start Vite React dev server |
| `npm run dev:e` | Launch Electron app against the dev server |
| `npm run build` | Build React frontend and transpile Electron sources |
| `npm run transpile:electron` | Compile Electron TypeScript |
| `npm run preview` | Preview the production React build |
| `npm run lint` | Run ESLint |
| `npm run dist:mac` | Build a macOS package with electron-builder |
| `npm run dist:win` | Build a Windows package with electron-builder |
| `npm run dist:linux` | Build a Linux package with electron-builder |

---

# 🔒 Electron Security Notes

Recommended Electron security practices:

- Disable `nodeIntegration`
- Enable `contextIsolation`
- Use preload scripts for secure IPC communication
- Avoid exposing Node.js APIs directly to the renderer

Example:

```ts
webPreferences: {
  contextIsolation: true,
  nodeIntegration: false
}
```

---

# 📦 Production Packaging

This repository is configured to package releases with `electron-builder`.

Use the provided npm scripts to produce platform builds:

```bash
npm run dist:mac
npm run dist:win
npm run dist:linux
```

Each command runs a full build and then packages the application for the target OS.

---

# 🎨 Tailwind CSS

Tailwind CSS is configured for the React frontend. The project includes `tailwind.config.cjs` and `postcss.config.cjs`, and `src/index.css` imports Tailwind utilities.

Design note: the app uses a minimal CSS-variables approach for colors. `src/index.css` exposes two variables:

- `--bg` — page background color
- `--text` — page foreground / primary text color

There are class-based dark-mode overrides in `src/index.css` (`.dark :root { ... }`) and Tailwind is configured with `darkMode: 'class'` so `dark:` variants work.

Tailwind theme has been extended to expose CSS-variable-based color tokens so you can use these utility class names:

- `bg-bg` — background using `--bg`
- `text-fg` — foreground using `--text`
- `bg-accent` / `text-accent` — accent (mapped to `--accent`)

Example usage:

```tsx
// use the background/foreground tokens
<main className="min-h-screen flex items-center justify-center bg-bg text-fg">
  <h1 className="text-3xl font-semibold">Hello</h1>
  <button className="ml-4 px-3 py-1 rounded bg-accent text-white">Action</button>
</main>
```

## 🌗 Dark / Light Mode

The project includes a tiny theme helper at `src/theme.ts` that:

- initializes theme from `localStorage` or the user's `prefers-color-scheme`
- applies the `dark` class on the root element when dark mode is active
- exposes `toggleTheme()` to switch modes and persist the choice

Usage example:

```tsx
import { toggleTheme } from './theme'

function ThemeToggle() {
  return (
    <button onClick={() => toggleTheme()} className="px-3 py-1 rounded bg-bg text-fg dark:bg-bg">
      Toggle theme
    </button>
  )
}
```

Tailwind's `dark:` variants respond to the presence of the `dark` class on the root element.

If you use VS Code, reload the window after these changes so the Tailwind IntelliSense extension picks up `tailwind.config.cjs` and the `.vscode/settings.json` mapping.

---

# 🧠 Recommended VSCode Extensions

- ESLint
- Prettier
- Error Lens

---

# 📄 License

MIT License

---

# 🤝 Contributing

Contributions are welcome.

1. Fork repository
2. Create feature branch
3. Commit changes
4. Open pull request

---

# ⭐ Support

If you like this project:

- Star the repository
- Share it
- Contribute improvements

---

# 📬 Contact

Created with ❤️ using Electron + React + TypeScript.

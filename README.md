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

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone <your-repository-url>
cd electron-app
```

---

## 2. Install Dependencies

```bash
npm install
```

---

# 💻 Development

This project uses separate processes for React and Electron during development.

---

## Start React Development Server

```bash
npm run dev:r
```

This starts the Vite frontend server.

---

## Start Electron

Open another terminal and run:

```bash
npm run dev:e
```

This launches the Electron application.

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

Tailwind CSS is now configured for the React frontend.

The project includes `tailwind.config.cjs` and `postcss.config.cjs`, and the CSS entry file imports Tailwind utilities.

Example usage:

```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>
```

## 🌗 Dark / Light Mode

Tailwind is configured to use class-based dark mode (`darkMode: 'class'`) so you can use the `dark:` variant in your components (for example `dark:bg-slate-900`).

A small theme utility has been added at `src/theme.ts` which:

- initializes the initial theme from `localStorage` or the user's `prefers-color-scheme`
- applies the `dark` CSS class on the root element when dark mode is active
- exposes a `toggleTheme()` function to switch modes and persist the choice

Usage example in a React component:

```tsx
import { toggleTheme } from './theme'

function ThemeToggle() {
  return (
    <button onClick={() => toggleTheme()} className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-800">
      Toggle theme
    </button>
  )
}
```

Tailwind's `dark:` variants will respond to the presence of the `dark` class on the root element.

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
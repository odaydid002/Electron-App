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
│   ├── components/         # Reusable React components
│   ├── pages/              # Application pages
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utility functions
│   ├── assets/             # Static assets
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
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

## Build React Application

```bash
npm run build
```

Output directory:

```bash
/dist-react
```

---

## Transpile Electron TypeScript

```bash
npm run transpile:electron
```

Output directory:

```bash
/dist-electron
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
| `npm run dev:r` | Start Vite React dev server |
| `npm run dev:e` | Launch Electron app |
| `npm run build` | Build React application |
| `npm run transpile:electron` | Compile Electron TypeScript |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

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

You can package the application using tools like:

- electron-builder
- electron-forge
- electron-packager

Example installation:

```bash
npm install electron-builder --save-dev
```

---

# 🎨 Tailwind CSS

Tailwind is fully integrated into the React frontend.

Example usage:

```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>
```

---

# 🧠 Recommended VSCode Extensions

- ESLint
- Tailwind CSS IntelliSense
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

# Electron React TypeScript Tailwind Template

A modern desktop application boilerplate built with Electron, React, TypeScript, Vite, and Tailwind CSS.

This project provides a clean architecture for building fast, scalable, and modern cross-platform desktop applications using web technologies.

---

# ✨ Features

- ⚡ Electron for desktop application development
- ⚛️ React + Vite frontend with HMR
- 🔷 TypeScript support (strict mode)
- 🎨 Tailwind CSS integration + theme system
- 🔥 Fast HMR with Vite
- 🪟 Cross-platform support (Windows, macOS, Linux)
- 📦 Separate Electron and React build outputs
- 🧩 **Feature-based folder structure** (scalable architecture)
- 🔒 Secure IPC communication with type safety
- 🎯 Modular Electron main process (handlers, windows, UI, utils)
- 🔄 State management & context providers
- 📱 Responsive component architecture

---

# 📁 Project Structure

## Overview

This project is organized into two main parts:

1. **`src/electron/`** — Main Electron process (backend)
2. **`src/app/`** — React frontend (renderer/UI)

---

## 🎛️ Electron Main Process (`src/electron/`)

The Electron main process is organized by feature for **scalability and maintainability**:

```
src/electron/
├── main.ts                          # Entry point - coordinates all modules
├── STRUCTURE.md                     # Detailed structure documentation
│
├── ipc/                            # Inter-Process Communication
│   ├── index.ts                    # Core IPC utilities & helpers
│   └── handlers/                   # ← Modular IPC handlers by feature
│       ├── window.ts               # Window frame actions (minimize, maximize, close, restore)
│       ├── system.ts               # System info & data polling
│       └── index.ts                # Registers all handlers
│
├── windows/                        # Window Management
│   ├── main-window.ts              # Main window creation & lifecycle
│   └── index.ts                    # Barrel export
│
├── ui/                             # UI Components
│   ├── menu.ts                     # Application menu
│   ├── tray.ts                     # System tray icon & context menu
│   └── index.ts                    # Barrel export
│
├── utils/                          # Utilities
│   ├── paths.ts                    # Path resolution (preload, UI, assets)
│   └── index.ts                    # Barrel export
│
├── constants/                      # Configuration
│   ├── env.ts                      # Environment variables & config
│   └── index.ts                    # Barrel export
│
├── types/                          # Type Definitions
│   ├── ipc-events.ts               # EventPayLoadMapping (all IPC types)
│   └── index.ts                    # Barrel export
│
├── preload/                        # Preload Scripts
│   └── preload.cts                 # Secure API exposed to renderer
│
└── tests/                          # Tests
    └── *.test.ts                   # Unit/integration tests
```

### Why This Structure?

- **Feature-based organization**: Each feature has its own module
- **Separation of concerns**: IPC handlers, window management, and UI are separate
- **Easy to extend**: Add new handlers/features without modifying core logic
- **Type-safe**: Centralized event types prevent IPC errors
- **Clean main.ts**: Entry point is simple and readable

---

## 🎨 React App (`src/app/`)

The React frontend is organized for **component-driven development**:

```
src/app/
├── main.tsx                        # React app entry point
│
├── components/                     # Reusable UI components
│   ├── Button.tsx
│   ├── Header.tsx
│   └── ...
│
├── features/                       # Feature modules (feature-driven)
│   ├── auth/
│   ├── dashboard/
│   └── settings/
│
├── hooks/                          # Custom React hooks
│   ├── useTheme.ts                 # Theme toggle hook
│   ├── useElectron.ts              # Electron IPC hook
│   └── ...
│
├── layouts/                        # Layout components
│   ├── MainLayout.tsx
│   └── ...
│
├── pages/                          # Page components (routes)
│   ├── App.tsx                     # Root component
│   └── ...
│
├── providers/                      # Context providers
│   ├── ThemeProvider.tsx
│   └── ...
│
├── services/                       # Business logic services
│   ├── api.ts
│   └── ...
│
├── stores/                         # State management
│   ├── store.ts
│   └── ...
│
└── styles/                         # Global styles
    └── index.css                   # Tailwind CSS imports
```

### Architecture Pattern

- **Pages** → Containers for routes
- **Features** → Domain-specific features (auth, dashboard, etc.)
- **Components** → Reusable UI building blocks
- **Hooks** → Reusable stateful logic
- **Providers** → Global state/context
- **Services** → Business logic & API calls
- **Stores** → State management

---

## Complete Project Tree

```
electron-app/
│
├── dist-electron/          # Compiled Electron files
├── dist-react/             # Built React frontend
│
├── src/
│   ├── electron/           # Electron main process
│   │   ├── main.ts
│   │   ├── ipc/
│   │   ├── windows/
│   │   ├── ui/
│   │   ├── utils/
│   │   ├── constants/
│   │   ├── types/
│   │   ├── preload/
│   │   └── tests/
│   │
│   ├── app/                # React frontend
│   │   ├── main.tsx
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── providers/
│   │   ├── services/
│   │   ├── stores/
│   │   └── styles/
│   │
│   └── assets/             # Static assets
│
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # Root TypeScript config
├── tsconfig.app.json       # React TypeScript config
├── tsconfig.node.json      # Node TypeScript config
├── electron-builder.json   # Packaging configuration
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

## 🔗 IPC Communication (Electron ↔ React)

Communication between the main process and renderer happens through **IPC (Inter-Process Communication)**.

### Type-Safe IPC

All IPC events are defined in `src/electron/types/ipc-events.ts`:

```typescript
export interface EventPayLoadMapping {
  getStatic: string;
  test: { message: string };
  sendFrameAction: 'CLOSE' | 'MINIMIZE' | 'MAXIMIZE' | 'RESTORE';
}
```

### From Renderer (React) → Main (Electron)

In React component:

```typescript
// Call main process handler
const data = await window.electron.getStatic();

// Send data to main
window.electron.sendFrameAction('MINIMIZE');
```

The preload script (`src/electron/preload/preload.cts`) exposes these methods securely.

### From Main (Electron) → Renderer (React)

In Electron main process:

```typescript
import { ipcWebContentsSend } from './ipc/index.js';

ipcWebContentsSend('test', mainWindow.webContents, {
  message: 'Hello from main process'
});
```

In React component:

```typescript
window.electron.subscribeTest((data) => {
  console.log(data.message); // "Hello from main process"
});
```

### Adding New IPC Events

1. **Define type** in `src/electron/types/ipc-events.ts`:
   ```typescript
   export interface EventPayLoadMapping {
     myNewEvent: { data: string };
   }
   ```

2. **Create handler** in `src/electron/ipc/handlers/`:
   ```typescript
   export function registerMyHandlers(mainWindow: BrowserWindow) {
     ipcMainHandle('myNewEvent', () => {
       return { data: 'response' };
     });
   }
   ```

3. **Register** in `src/electron/ipc/handlers/index.ts`:
   ```typescript
   registerMyHandlers(mainWindow);
   ```

4. **Expose in preload** `src/electron/preload/preload.cts`:
   ```typescript
   myNewEvent: () => ipcInvoke('myNewEvent'),
   ```

---

## 📚 Working with the New Structure

### Adding a Feature to Electron

1. Create a handler in `src/electron/ipc/handlers/myfeature.ts`
2. Add type to `src/electron/types/ipc-events.ts`
3. Register in `src/electron/ipc/handlers/index.ts`
4. Expose in preload if needed
5. Call from React using `window.electron.myMethod()`

### Adding a Feature to React

1. Create components in `src/app/components/`
2. Create feature folder in `src/app/features/`
3. Add custom hooks in `src/app/hooks/`
4. Add business logic in `src/app/services/`
5. Use IPC to communicate with main process

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

# � Quick Reference

## Common Development Tasks

### I want to add a new IPC event
1. Define type in `src/electron/types/ipc-events.ts`
2. Create handler in `src/electron/ipc/handlers/`
3. Register handler in `src/electron/ipc/handlers/index.ts`
4. Expose in `src/electron/preload/preload.cts`
5. Call from React: `window.electron.myEvent()`

### I want to add a new React component
1. Create component in `src/app/components/`
2. Import and use in your page/feature
3. Style with Tailwind CSS classes

### I want to add a new feature
1. Create folder in `src/app/features/myfeature/`
2. Create `components/`, `hooks/`, `services/` subfolders as needed
3. Create entry point `index.ts` that exports the feature
4. Import in your page or app

### I want to add window management
1. Create function in `src/electron/windows/`
2. Export from `src/electron/windows/index.ts`
3. Initialize in `src/electron/main.ts`

### I want to create a custom hook
1. Create file in `src/app/hooks/useMyHook.ts`
2. Export custom hook function
3. Use in components: `const myHook = useMyHook()`

---

## File Location Reference

| Need | Location |
|------|----------|
| Change window behavior | `src/electron/windows/main-window.ts` |
| Add IPC event | `src/electron/ipc/handlers/` |
| Define IPC types | `src/electron/types/ipc-events.ts` |
| Add menu items | `src/electron/ui/menu.ts` |
| Modify tray | `src/electron/ui/tray.ts` |
| Create React page | `src/app/pages/` |
| Create React component | `src/app/components/` |
| Add custom hook | `src/app/hooks/` |
| Add business logic | `src/app/services/` |
| Global config | `src/electron/constants/env.ts` |
| Path utilities | `src/electron/utils/paths.ts` |

---

# �🔒 Electron Security Notes

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

# �️ Architecture & Best Practices

## Electron Main Process Best Practices

### 1. Modular Handlers
- Create feature-specific handler files in `src/electron/ipc/handlers/`
- Export a registration function that accepts `mainWindow`
- Register all handlers in `ipc/handlers/index.ts`

```typescript
// src/electron/ipc/handlers/notifications.ts
export function registerNotificationHandlers(mainWindow: BrowserWindow) {
  ipcMainHandle('showNotification', () => {
    // notification logic
  });
}
```

### 2. Type Safety
- All IPC events must be defined in `src/electron/types/ipc-events.ts`
- Use the `EventPayLoadMapping` interface for type-safe communication
- TypeScript will catch IPC errors at compile time

### 3. Clean Main Process
- Keep `src/electron/main.ts` simple and focused on coordination
- Delegate feature logic to dedicated modules
- Initialize modules in this order:
  1. Create main window (`windows/`)
  2. Register IPC handlers (`ipc/handlers/`)
  3. Handle window lifecycle (`handleMainWindowCloseEvent`)
  4. Create UI components (menu, tray)

### 4. Security
- Always validate IPC frame in `validateEventFrame()`
- Use preload script to expose only necessary APIs
- Never expose Node.js directly to renderer
- Use `contextIsolation: true`

---

## React App Best Practices

### 1. Component Organization
- **Pages**: Route-level components in `src/app/pages/`
- **Features**: Domain-specific features in `src/app/features/`
- **Components**: Reusable UI components in `src/app/components/`
- **Hooks**: Custom React hooks in `src/app/hooks/`

### 2. State Management
- Use React Context for global state in `src/app/providers/`
- Use custom hooks for component state in `src/app/hooks/`
- Store state in `src/app/stores/` for complex applications

### 3. Services & Business Logic
- API calls and external services in `src/app/services/`
- Keep components focused on rendering, not logic
- Extract reusable logic into custom hooks

### 4. Styling
- Use Tailwind CSS utility classes
- Use CSS variables for theme-aware styling
- Implement dark mode with the `dark` class

### 5. IPC Communication
- Create custom hooks for IPC calls:
  ```typescript
  // src/app/hooks/useElectron.ts
  export function useElectron() {
    return window.electron;
  }
  ```
- Handle IPC errors gracefully
- Unsubscribe from listeners in cleanup

---

# �🎨 Tailwind CSS

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

# 🐛 Troubleshooting

### Build fails with TypeScript errors in electron/

**Solution**: Ensure all imports use `.js` extensions (even for TypeScript files) as per ES modules:
```typescript
// ✅ Correct
import { createMainWindow } from './windows/index.js';

// ❌ Wrong
import { createMainWindow } from './windows/index';
```

### IPC event not working

**Checklist**:
1. Type defined in `src/electron/types/ipc-events.ts`? ✓
2. Handler registered in `src/electron/ipc/handlers/index.ts`? ✓
3. Handler calls `ipcMainHandle` or `ipcMainOn`? ✓
4. Exposed in preload script? ✓
5. Called correctly from React with `window.electron.eventName()`? ✓

### Preload script not found

**Solution**: The preload path is resolved in `src/electron/windows/main-window.ts`. Ensure the path matches your build output. During development, it looks for:
```
.dist-electron/preload.cjs
```

### Window controls (minimize, maximize) not working

**Check**: Ensure `registerWindowHandlers()` is called in `src/electron/main.ts`

### Dark mode not applying

**Solution**: Make sure the `dark` class is applied to the root element. Check `src/app/hooks/useTheme.ts`

### Port 5123 already in use

**Solution**: Change the port in `src/electron/constants/env.ts` or in Vite config

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

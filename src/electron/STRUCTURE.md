# Electron App Structure Documentation

## Overview
The `src/electron` folder is organized for scalability, maintainability, and clear separation of concerns.

## Folder Structure

```
src/electron/
├── main.ts                      # Entry point - initializes app and coordinates modules
├── preload/
│   └── preload.cts             # Preload script - exposes secure API to renderer
├── ipc/
│   ├── index.ts                # Core IPC utilities and helpers
│   └── handlers/
│       ├── window.ts           # Window-related IPC handlers
│       ├── system.ts           # System-related IPC handlers  
│       └── index.ts            # Exports all handlers
├── windows/
│   ├── main-window.ts          # Main window creation and lifecycle
│   └── index.ts                # Exports window utilities
├── ui/
│   ├── menu.ts                 # Application menu
│   ├── tray.ts                 # System tray
│   └── index.ts                # Exports UI components
├── utils/
│   ├── paths.ts                # Path resolution utilities
│   └── index.ts                # Exports utilities
├── constants/
│   ├── env.ts                  # Environment and config constants
│   └── index.ts                # Exports constants
├── types/
│   ├── ipc-events.ts           # IPC event type definitions
│   └── index.ts                # Exports types
└── tests/
    ├── unit/                   # Unit tests
    └── e2e/                    # End-to-end tests
```

## Module Responsibilities

### `main.ts`
- Application entry point
- Coordinates initialization of all modules
- Handles app lifecycle events

### `ipc/` (IPC Communication)
- **`index.ts`**: Core IPC utilities (`ipcMainHandle`, `ipcMainOn`, `ipcWebContentsSend`, `validateEventFrame`)
- **`handlers/window.ts`**: Window control handlers (minimize, maximize, close, restore)
- **`handlers/system.ts`**: System info handlers (polling, static data)
- **`handlers/index.ts`**: Registers all handlers

### `windows/` (Window Management)
- **`main-window.ts`**: Main window creation and setup
- Handles close events (minimize to tray)
- Manages window lifecycle

### `ui/` (User Interface)
- **`menu.ts`**: Application menu
- **`tray.ts`**: System tray icon and context menu
- Platform-specific UI handling

### `utils/` (Utilities)
- **`paths.ts`**: Path resolution for assets, UI, preload files

### `constants/` (Configuration)
- **`env.ts`**: Environment configuration (dev server URL, ports)
- Centralized configuration values

### `types/` (Type Definitions)
- **`ipc-events.ts`**: `EventPayLoadMapping` type for all IPC events
- Shared types between main and renderer

### `preload/`
- **`preload.cts`**: Exposes secure API to renderer process
- Uses types from `types/ipc-events.ts`

## Adding New Features

### Adding a new IPC handler:
1. Create a new file in `ipc/handlers/` (e.g., `notifications.ts`)
2. Export a registration function: `export function registerNotificationHandlers(mainWindow) { ... }`
3. Add new event type to `types/ipc-events.ts` in `EventPayLoadMapping`
4. Import and call in `ipc/handlers/index.ts`

### Adding a new IPC event:
1. Add type to `types/ipc-events.ts`:
   ```typescript
   export interface EventPayLoadMapping {
     newEvent: PayloadType;
   }
   ```
2. Create handler in appropriate `ipc/handlers/*.ts` file
3. Expose in preload (if needed)

### Adding UI components:
1. Create file in `ui/` folder
2. Export from `ui/index.ts`
3. Initialize in `main.ts`

## Best Practices

- **Separation of Concerns**: Keep IPC handlers, window management, and UI separate
- **Type Safety**: Always define event types in `types/ipc-events.ts`
- **Centralized Exports**: Use `index.ts` files for barrel exports
- **Path Resolution**: Use utilities from `utils/paths.ts` instead of hardcoding paths
- **Clean Main**: `main.ts` should be clean and coordinate between modules, not contain business logic
- **Comments**: Document module purpose at the top of each file

## Migration from Old Structure

Old imports like:
```typescript
import { ipcMainHandle } from './ipc/index.js';
import { getPreloadPath } from './utils/pathResolver.js';
import { createTray } from './tray.js';
```

Are now:
```typescript
import { ipcMainHandle } from './ipc/index.js';  // Same
import { getPreloadPath } from './utils/index.js';  // pathResolver.ts → paths.ts
import { createSystemTray } from './ui/index.js';  // tray.ts moved to ui/
```

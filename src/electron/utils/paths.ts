/**
 * Path Utilities
 * Handles path resolution for application directories and files
 */

import path from "path";
import { app } from "electron";
import { isDev } from "../ipc/index.js";

export function getPreloadPath(): string {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}

export function getUIPath(): string {
  return path.join(app.getAppPath(), "/dist-react/index.html");
}

export function getAssetsPath(): string {
  return path.join(app.getAppPath(), isDev() ? "." : "..", "/src/assets");
}

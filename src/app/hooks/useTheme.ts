import { useCallback, useEffect, useState } from "react";
import { Storage } from "../services/storage";

const storage = new Storage();

function resolveSystemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Initialize theme from storage or system preference
   */
  const initialize = useCallback(async () => {
    try {
      const stored = (await storage.get("theme")) as Theme | null;

      const finalTheme =
        stored && stored !== "system"
          ? stored
          : resolveSystemTheme();

      setThemeState(finalTheme);
      applyTheme(finalTheme);

      setInitialized(true);
    } catch (error) {
      console.error("Theme initialization failed:", error);

      const fallback = resolveSystemTheme();
      setThemeState(fallback);
      applyTheme(fallback);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Auto initialize on mount
   */
  useEffect(() => {
    initialize();
  }, [initialize]);

  /**
   * Change theme manually
   */
  const setTheme = useCallback(async (newTheme: Theme) => {
    const finalTheme =
      newTheme === "system"
        ? resolveSystemTheme()
        : newTheme;

    setThemeState(finalTheme);
    applyTheme(finalTheme);

    try {
      await storage.set({
        key: "theme",
        value: newTheme,
      });
    } catch (error) {
      console.error("Failed to persist theme:", error);
    }
  }, []);

  return {
    theme,
    setTheme,
    initialize,
    initialized,
    loading,
  };
}
// lib/useIsDarkTheme.ts
import { THEMES } from "@/lib/themes";
import { useThemeGradient } from "./useThemeGradient";

const DARK_KEYS = ["brandG", "brandH", "brandI"] as const;

export function useIsDarkTheme() {
  const gradient = useThemeGradient();
  if (!gradient) return false;
  return Object.values(DARK_KEYS).some((k) => THEMES[k] === gradient);
}

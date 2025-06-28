import { useEffect, useState } from "react";

export function useTheme() {
  // Always default to light theme
  const [theme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Ensure only 'light' class is applied to the html element
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    // Remove any saved theme preference from local storage
    localStorage.removeItem("theme");
  }, [theme]);

  // No toggleTheme function needed as theme is fixed
  return { theme, toggleTheme: () => {} }; // Return a no-op function for compatibility
}
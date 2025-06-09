import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme as "light" | "dark";
    }
    // Then check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Apply the theme class to the html element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    // Save theme preference to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface IUser {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
  showAnimationFooter: boolean;
  handleShowAnimFooter: () => void;
}

export const UserContext = createContext<IUser>({
  themeMode: "light",
  toggleTheme: () => {},
  showAnimationFooter: false,
  handleShowAnimFooter: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<IUser["themeMode"]>("light");
  const [showAnimationFooter, setShowAnimationFooter] = useState(false);

  /* Theme */
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark" || "theme" in localStorage) {
      setThemeMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setThemeMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (themeMode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setThemeMode("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    }
  };

  /* Animations */
  useEffect(() => {
    if (showAnimationFooter) {
      setTimeout(() => {
        setShowAnimationFooter(false);
      }, 500);
    }
  }, [showAnimationFooter]);

  const handleShowAnimFooter = () => {
    setShowAnimationFooter(true);
  };

  return (
    <UserContext.Provider
      value={{
        themeMode,
        toggleTheme,
        showAnimationFooter,
        handleShowAnimFooter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


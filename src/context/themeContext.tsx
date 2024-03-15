import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContextProvider = createContext();

export const ThemeContext = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContextProvider.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContextProvider.Provider>
  );
};

export const useTheme = () => useContext(ThemeContextProvider);

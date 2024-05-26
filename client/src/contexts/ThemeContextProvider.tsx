import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";

export interface ThemeContextTypes {
  mode: "light" | "dark";
  handleSetTheme: (newMode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextTypes>({
  mode: "light",
  handleSetTheme: (newMode) => {
    return newMode;
  },
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
}
const ThemeContextProvider = ({children}:{children: React.ReactNode}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const themeMap = {
    light: lightTheme,
    dark: darkTheme,
  };
  function handleSetTheme(newMode: "light" | "dark") {
    setMode(newMode);
    localStorage.setItem("chatAppTheme", newMode);
  }

  useEffect(() => {
    const localMode = localStorage.getItem("chatAppTheme");
    if(localMode) {
      setMode(localMode as "light" | "dark");
    }
    else {
      setMode("dark");
    }
  }, [])
  return (
    <ThemeContext.Provider value={{mode, handleSetTheme}}>
      <ThemeProvider theme={themeMap[mode]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
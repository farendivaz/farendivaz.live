import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [dark, setDark] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    if (theme === "light") {
      setMode("dark");
      setDark(true);
    } else {
      setMode("light");
      setDark(false);
    }
    // theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent, dark];
};

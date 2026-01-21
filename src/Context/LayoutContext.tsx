import { createContext, useContext, useEffect, useState } from "react";

type LayoutContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const LayoutContext = createContext<LayoutContextType | null>(null);

type ChildrenType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: ChildrenType) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() =>
    window.innerWidth <= 640 ? false : true,
  );
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640);

  const [theme, setTheme] = useState(() => {
    let themeMode = localStorage.getItem("mode") || "light";
    return themeMode;
  });

  //   mobile resize
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // theme toggle
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);
  }, [theme]);

  const value = {
    sidebarOpen,
    setSidebarOpen,
    isMobile,
    setIsMobile,
    theme,
    setTheme,
  };
  return <LayoutContext value={value}>{children}</LayoutContext>;
};

// custom hook
export const useLayoutHook = () => {
  const data = useContext(LayoutContext);

  if (!data) {
    throw new Error("Something went wrong");
  }

  return data;
};

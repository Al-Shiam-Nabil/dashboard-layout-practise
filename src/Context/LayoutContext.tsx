import { createContext, useContext, useEffect, useState } from "react";

export const LayoutContext = createContext(null);

type ChildrenType = {
  children: React.ReactNode;
};

export const LayoutProvider = ({ children }: ChildrenType) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  //   mobile resize
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const value = {
    sidebarOpen,
    setSidebarOpen,
    isMobile,
    setIsMobile,
  };
  return <LayoutContext value={value}>{children}</LayoutContext>;
};

// custom hook
export const useLayoutHook = () => {
  const data = useContext(LayoutContext);

  return data;
};

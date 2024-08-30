"use client";
import { createContext, useState } from "react";
import { AppContextProviderProps } from "@/types/props";

const AppContext = createContext({
  currentPath: "/home",
  setPath: (path: string) => {},
});

const ContextProvider = ({
  currentPath,

  children,
}: AppContextProviderProps) => {
  const [appPath, setPath] = useState<string>(currentPath);

  const context = {
    currentPath: appPath,
    setPath: (path: string) => setPath(path),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };

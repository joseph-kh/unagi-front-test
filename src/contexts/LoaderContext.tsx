import React, { createContext, useState, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface LoaderProvider {
  isLoading: boolean;
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
}

export const LoaderContext = createContext<LoaderProvider | null>(null);

export const LoaderProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext) as LoaderProvider;

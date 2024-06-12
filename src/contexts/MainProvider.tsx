import React from 'react';
import { LoaderProvider } from './LoaderContext';

interface Props {
  children: React.ReactNode;
}

const MainProvider = ({ children }: Props) => {
  return <LoaderProvider>{children}</LoaderProvider>;
};

export default MainProvider;

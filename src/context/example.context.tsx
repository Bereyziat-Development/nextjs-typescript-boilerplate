import React, { createContext, useContext, useState } from 'react';

interface MyContextInterface {
  count: number;
  incrementCount: () => void;
}

const MyContext = createContext<MyContextInterface | undefined>(undefined);

export const useMyContext = (): MyContextInterface => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const contextValue = {
    count,
    incrementCount,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

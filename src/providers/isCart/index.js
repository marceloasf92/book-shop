import { createContext, useContext, useState } from "react";

const IsCartContext = createContext();

export const IsCartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);

  return (
    <IsCartContext.Provider value={{ cart, setCart }}>
      {children}
    </IsCartContext.Provider>
  );
};

export const useIsCart = () => useContext(IsCartContext);

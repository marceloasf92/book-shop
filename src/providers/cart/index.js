import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [quantity, setQuantity] = useState(0);

  const addToCart = (book) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const bookInside = list.some(({ id }) => id === book.id);

    if (bookInside === false) {
      const newList = [...list, book];
      setCartList(newList);
      setQuantity(newList.reduce((acc, cur) => acc + cur.quantidade, 0));
      localStorage.setItem("cart", JSON.stringify(newList));
    } else {
      const changegList = list.map((item) => {
        if (item.id === book.id) {
          item.quantidade = item.quantidade + 1;
        }
        return item;
      });
      setCartList(changegList);
      setQuantity(changegList.reduce((acc, cur) => acc + cur.quantidade, 0));
      localStorage.setItem("cart", JSON.stringify(changegList));
    }
  };

  const removeBook = (book) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const removeFromTheList = list.filter((item) => item.id !== book.id);
    setCartList(removeFromTheList);
    setQuantity(
      removeFromTheList.reduce((acc, cur) => acc + cur.quantidade, 0)
    );
    localStorage.setItem("cart", JSON.stringify(removeFromTheList));
  };

  const addQuantity = (book) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const changegList = list.map((item) => {
      if (item.id === book.id) {
        item.quantidade = item.quantidade + 1;
      }
      return item;
    });
    setCartList(changegList);
    setQuantity(changegList.reduce((acc, cur) => acc + cur.quantidade, 0));
    localStorage.setItem("cart", JSON.stringify(changegList));
  };

  const withdrawQuantity = (book) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const changegList = list.map((item) => {
      if (item.id === book.id) {
        if (item.quantidade > 1) {
          item.quantidade = item.quantidade - 1;
        }
      }
      return item;
    });
    setCartList(changegList);
    setQuantity(changegList.reduce((acc, cur) => acc + cur.quantidade, 0));
    localStorage.setItem("cart", JSON.stringify(changegList));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        quantity,
        setQuantity,
        addQuantity,
        withdrawQuantity,
        removeBook,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

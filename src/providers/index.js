import { BooksProvider } from "./products";
import { CartProvider } from "./cart";
import { IsCartProvider } from "./isCart";

const Providers = ({ children }) => {
  return (
    <BooksProvider>
      <CartProvider>
        <IsCartProvider>{children}</IsCartProvider>
      </CartProvider>
    </BooksProvider>
  );
};

export default Providers;

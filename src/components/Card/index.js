import { useCart } from "../../providers/cart";
import Button from "../Button";
import { Container } from "./styles";

const Card = ({ book }) => {
  const { addToCart } = useCart();
  return (
    <Container>
      <h3>{book.name}</h3>
      <img src={book.image} alt={book.name} />
      <span>R$ {book.price.toFixed(2)}</span>
      <Button onClick={() => addToCart(book)}>Adicionar</Button>
    </Container>
  );
};

export default Card;

import { useBooks } from "../../providers/products";
import Card from "../Card";
import { Container } from "./styles";

const CardList = () => {
  const { books } = useBooks();
  return (
    <Container>
      {books.map((book) => {
        return <Card key={book.id} book={book} />;
      })}
    </Container>
  );
};
export default CardList;

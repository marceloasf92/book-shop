import { Container, ContainerButtons } from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

import { BsCartDashFill } from "react-icons/bs";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
  MdOutlineDelete,
} from "react-icons/md";

import { useCart } from "../../providers/cart";
import { useIsCart } from "../../providers/isCart";

const Cart = () => {
  const listaLivros = JSON.parse(localStorage.getItem("cart")) || [];

  const history = useHistory();

  const { setQuantity, addQuantity, withdrawQuantity, removeBook } = useCart();

  const { setCart } = useIsCart();

  return (
    <Container>
      <ul>
        {listaLivros.length === 0 ? (
          <li className="empty">
            <BsCartDashFill size={30} />
            <p>CARRINHO VAZIO</p>
          </li>
        ) : (
          listaLivros.map((book) => {
            return (
              <li key={book.id}>
                <img src={book.image} alt={book.name} style={{ width: 100 }} />
                <div className="containerInformation">
                  <h3>{book.name}</h3>
                  <p>
                    Valor unitário: R$ <span>{book.price.toFixed(2)}</span>
                  </p>
                  <p>
                    Quantidade: <span>{book.quantidade}</span>
                  </p>
                  <ContainerButtons>
                    <Button onClick={() => addQuantity(book)}>
                      <MdAddCircleOutline size={20} />
                    </Button>
                    <Button onClick={() => withdrawQuantity(book)}>
                      <MdOutlineRemoveCircleOutline size={20} />
                    </Button>
                    <Button
                      onClick={() => {
                        removeBook(book);
                        setCart(true);
                      }}
                    >
                      <MdOutlineDelete size={20} />
                    </Button>
                  </ContainerButtons>
                </div>
              </li>
            );
          })
        )}
      </ul>

      <aside>
        <h1>Resumo do Pedido</h1>
        <div>
          <p>
            {listaLivros.reduce((acc, cur) => acc + cur.quantidade, 0)}{" "}
            Produtos:
          </p>
          <span>
            R${" "}
            {listaLivros
              .reduce((acc, cur) => acc + cur.price * cur.quantidade, 0)
              .toFixed(2)}
          </span>
        </div>
        <Button
          onClick={() => {
            history.push("/");
            setCart(false);
            localStorage.clear();
            setQuantity(0);
          }}
        >
          FINALIZAR O PEDIDO
        </Button>
      </aside>
    </Container>
  );
};
export default Cart;

import { Container, ContainerButton, ContainerFlex } from "./styles";
import { BiCart, BiArrowBack } from "react-icons/bi";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/cart";
import { useIsCart } from "../../providers/isCart";
import logo from "../../img/book.png";

const Header = () => {
  const history = useHistory();

  const { cart, setCart } = useIsCart();

  const { quantity } = useCart();

  return (
    <>
      <Container>
        <ContainerFlex>
          <div className="logo">
            <img
              src={logo}
              alt="book"
              style={{ background: "transparent", width: 50 }}
            />
            <h1>Book Store</h1>
          </div>

          <ContainerButton>
            {cart === false ? (
              <div className="container-flex">
                <div className="numberCart">
                  <span>{quantity}</span>
                </div>
                <BiCart size={20} />
                <Button
                  onClick={() => {
                    history.push("/carrinho");
                    setCart(true);
                  }}
                >
                  Carrinho
                </Button>
              </div>
            ) : (
              <div className="container-flex">
                <BiArrowBack size={20} />
                <Button
                  onClick={() => {
                    history.push("/");
                    setCart(false);
                  }}
                >
                  Voltar
                </Button>
              </div>
            )}
          </ContainerButton>
        </ContainerFlex>
      </Container>
    </>
  );
};

export default Header;

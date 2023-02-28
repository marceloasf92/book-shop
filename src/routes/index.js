import { Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Main from "../pages/Main";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/carrinho" component={Cart} />
    </Switch>
  );
};
export default Routes;

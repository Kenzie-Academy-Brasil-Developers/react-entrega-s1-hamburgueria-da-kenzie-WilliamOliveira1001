import { ButtonStyled } from "../button/style";
import { CartStyled } from "./style";

export const CartTotal = ({ removeAll, currentSale }) => {
  const totalPrice = currentSale.reduce((acc, elem) => {
    return acc + elem.price;
  }, 0);
  return (
    <>
      <CartStyled>
        <div>
          <p>Total</p>
          <span>R$ {totalPrice. toFixed(2)}</span>
        </div>
        <button onClick={() => removeAll()}>Remover todos</button>
      </CartStyled>
    </>
  );
};

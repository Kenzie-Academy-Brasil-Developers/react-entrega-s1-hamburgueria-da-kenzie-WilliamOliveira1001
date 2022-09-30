import { CartTotal } from "../cartTotal";
import { ContainerCard } from "./style";

export const Cart = ({ currentSale, removeItem, removeAll }) => {
  return (
    <>
      <ContainerCard>
        <ul>
          <div className="header-cart">
            <h1>Carrinho de compra</h1>
          </div>
          {currentSale.map((elem) => (
            <li key={elem.id}>
              <img src={elem.img} alt="logo" />
              <div className="cart-info">
                <div>
                  <h3>{elem.name}</h3>
                  <span>{elem.category}</span>
                </div>
                <span><button onClick={() => removeItem(elem.id)}>Remover</button></span>
              </div>
            </li>
          ))}
        </ul>
        <div className="div-CarTotal">
          <CartTotal removeAll={removeAll} currentSale={currentSale} />
        </div>
      </ContainerCard>
    </>
  );
};

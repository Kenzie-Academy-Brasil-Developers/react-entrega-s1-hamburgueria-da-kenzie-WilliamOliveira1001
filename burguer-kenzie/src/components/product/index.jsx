import { ButtonStyled } from "../button/style";
import { Card } from "./style";

export const Product = ({ id, img, name, category, price, handleClick }) => {
  return (
    <>
      <Card>
        <img src={img} alt="product" />
        <section>
          <h2>{name}</h2>
          <span>{category}</span>
          <p>R$ {price}</p>
        </section>
        <ButtonStyled onClick={() => handleClick(id)}>Adicionar</ButtonStyled>
      </Card>
    </>
  );
};

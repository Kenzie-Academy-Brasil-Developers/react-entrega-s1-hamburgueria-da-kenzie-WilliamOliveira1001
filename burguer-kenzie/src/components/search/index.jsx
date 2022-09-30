import { useState } from "react";
import { ButtonStyled } from "../button/style";
import { StyledSearch } from "./style";

export const Search = ({ showProducts }) => {
  const [product, setProduct] = useState("");
  return (
    <>
      <StyledSearch onSubmit={(event) => event.preventDefault()} action="">
        <input
          type="text"
          onChange={(event) => setProduct(event.target.value)}
        />
        <ButtonStyled
          type="submit"
          onClick={() => showProducts(product)}
        >Pesquisar</ButtonStyled>
      </StyledSearch>
    </>
  );
};

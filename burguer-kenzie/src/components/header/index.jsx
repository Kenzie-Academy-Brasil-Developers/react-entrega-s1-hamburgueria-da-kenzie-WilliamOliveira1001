import { Search } from "../search";
import { HeaderStyled } from "./style";

export const Header = ({ showProducts }) => {
  return (
    <>
      <HeaderStyled>
        <h1>Burguer Kenzie</h1>
        <Search showProducts={showProducts} />
      </HeaderStyled>
    </>
  );
};

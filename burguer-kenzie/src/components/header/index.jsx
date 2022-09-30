import { Search } from "../search";
import { HeaderStyled } from "./style";
import burguer from "../../assets/img/burguerpng.png";

export const Header = ({ showProducts }) => {
  return (
    <>
      <HeaderStyled>
        <figure><img src={burguer} alt="" /></figure>
        <Search showProducts={showProducts} />
      </HeaderStyled>
    </>
  );
};

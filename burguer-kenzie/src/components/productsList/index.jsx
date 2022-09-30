import { ButtonStyled } from "../button/style";
import { Product } from "../product";
import { ListProduct } from "./style";

export const ProdutcsList = ({
  products,
  handleClick,
  filteredProducts,
  All,
}) => {
  return (
    <>
      <ListProduct>
        {filteredProducts.length !== 0 && (
          <div className="section-search-listProduct">
            <h1>
              Resultados para:
              {filteredProducts.length === 1 ? (
                <span>{filteredProducts[0].name}</span>
              ) : (
                <span>{filteredProducts[0].category}</span>
              )}
            </h1>
            <ButtonStyled className="button-clean-search" onClick={() => All()}>Limpar busca</ButtonStyled>
          </div>
        )}

        <ul>
          {products.map((elem) => (
            <Product
              key={elem.id}
              id={elem.id}
              name={elem.name}
              category={elem.category}
              price={elem.price}
              img={elem.img}
              handleClick={handleClick}
            ></Product>
          ))}
        </ul>
      </ListProduct>
    </>
  );
};

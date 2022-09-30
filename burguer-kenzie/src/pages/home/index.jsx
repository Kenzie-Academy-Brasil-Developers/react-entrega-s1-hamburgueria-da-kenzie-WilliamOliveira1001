import { useEffect, useState } from "react";
import { Cart } from "../../components/cart";
import { Header } from "../../components/header";
import { ProdutcsList } from "../../components/productsList";
import { Container } from "./style";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = (searchResult) => {
    setFilteredProducts(
      products.filter(
        (elem) =>
          elem.name.toLowerCase() === searchResult.toLowerCase() ||
          elem.category.toLowerCase() === searchResult.toLowerCase()
      )
    );
  };

  const handleClick = (id) => {
    const product = products.find((elem) => elem.id === id);
    if (currentSale.includes(product)) {
    } else {
      setCurrentSale([...currentSale, product]);
    }
  };

  const removeItem = (id) => {
    setCurrentSale(currentSale.filter((elem) => elem.id !== id));
  };

  const removeAll = () => {
    setCurrentSale([]);
  };

  const All = () => {
    setFilteredProducts([]);
  };

  return (
    <>
      <Container>
        <Header showProducts={showProducts} />

        <div className="div">
          <ProdutcsList
            handleClick={handleClick}
            filteredProducts={filteredProducts}
            All={All}
            products={
              filteredProducts.length !== 0 ? filteredProducts : products
            }
          />
          {currentSale.length === 0 ? (
            <div className="header-cart-alert">
              <h1>Carrinho de compra</h1>
              <div className="alert-vazio">
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
              </div>
            </div>
          ) : (
            <Cart
              currentSale={currentSale}
              removeItem={removeItem}
              removeAll={removeAll}
            />
          )}
        </div>
      </Container>
    </>
  );
};

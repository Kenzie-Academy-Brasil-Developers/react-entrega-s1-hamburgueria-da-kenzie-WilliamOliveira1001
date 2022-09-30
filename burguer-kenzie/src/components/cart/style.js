import styled from "styled-components";
export const ContainerCard = styled.div`
  width: 97%;
  margin: 10px auto;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background-color: #e0e0e0;
  }
  li {
    display: flex;
    margin: 10px;
  }
  ul {
    width: 100%;
  }
  .header-cart {
    width: 100%;
    height: 65px;
    background-color: #27ae60;
    color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  h1 {
    margin: 22px 0px 0px 10px;
    font-weight: 700;
    font-size: 18px;
  }
  .cart-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    h3 {
      font-weight: 700;
      font-size: 18px;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      color: #828282;
      margin-top: 5px;
      button {
        font-weight: 500;
        font-size: 12px;
        color: #bdbdbd;
      }
    }
    div {
      gap: 9px;
      margin: 5px 0px 0px 10px;
    }
  }
  .div-CarTotal{
    width: 100%;
  }
  @media (min-width: 700px){
    width: 542px;
  }
`;

import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  .div {
    width: 100%;
  }
  .header-cart-alert {
    width: 97%;
    height: 65px;
    margin: 10px 7px;
    background-color: #27ae60;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    h1 {
        font-weight: 700;
        font-size: 18px;
        margin: 22px 0px 0px 10px;
        color: white;
      }
      .alert-vazio {
        color: black;
        display: flex;
        align-items: center;
        margin: 79px auto;
        gap: 12px;
        h2 {
          color: #333333;
        }
        span {
          color: #828282;
        }
      }
  }   
  @media (min-width: 700px) {
    .div {
      display: flex;
      flex-direction: row;
      max-width: 1388px;
      margin: 0 auto;
    }
    .header-cart-alert {
      width: 542px;
      height: 65px;
      background-color: #27ae60;
      color: white;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding-top: 10px;
      margin: 10px 0px;
      h1 {
        font-weight: 700;
        font-size: 18px;
        margin: 12px 0px 0px 10px;
      }
      .alert-vazio {
        color: black;
        display: flex;
        align-items: center;
        margin: 79px auto;
        gap: 12px;
        h2 {
          color: #333333;
        }
        span {
          color: #828282;
        }
      }
    }
  }
`;

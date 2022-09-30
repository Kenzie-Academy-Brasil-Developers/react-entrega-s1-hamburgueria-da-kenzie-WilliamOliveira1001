import styled from "styled-components";

export const CartStyled = styled.div`
  width: 100%;
  margin-top: 15px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 41px;
    width: 100%;
    padding: 0px 10px;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
  }
  span {
    font-weight: 600;
    color: #828282;
    font-size: 19px;
  }
  button {
    height: 60px;
    background-color: #e0e0e0;
    width: 97%;
    margin: 0 auto;
    font-weight: 600;
    font-size: 16px;
    color: #828282;
  }
`;

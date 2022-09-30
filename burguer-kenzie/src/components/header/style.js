import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 139px;
  margin-bottom: 10px;
  img {
    margin: 15px 0px;
    text-align: center;
    width: 144.94px;
    height: 25.83px;
  }
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    max-width: 1368px;
    margin: 0 auto;
    img {
      margin: 15px 0px;
      text-align: center;
      width: 144.94px;
      height: 25.83px;
    }
    figure {
      justify-content: flex-start;
    }
  }
`;

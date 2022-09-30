import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 139px;
  margin-bottom: 10px;
  h1 {
    margin: 15px 0px;
    text-align: center;
  }
  @media (min-width: 700px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1368px;
    margin: 0 auto;
  }
`;

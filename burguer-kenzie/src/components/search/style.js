import styled from "styled-components";

export const StyledSearch = styled.form`
  background-color: white;
  width: 88%;
  height: 60px;

  display: flex;
  align-items: center;

  margin: 0 auto;
  padding: 8px;

  border: 1px solid #3a3a3a2b;
  border-radius: 5px;
  input {
    margin: 0 auto;
    height: 100%;
    width: 312px;
    border: none;
    outline: none;
  }
  @media (min-width: 700px){
    width: 365px;
    margin: 5px;
  }
`;

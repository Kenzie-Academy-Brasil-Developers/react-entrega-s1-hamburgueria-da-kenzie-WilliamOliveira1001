import styled from "styled-components";
export const ListProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;

  ul {
    display: flex;
    overflow-x: scroll;
    width: 100%;
  }
  .section-search-listProduct {
    width: 100%;
  }
  .button-clean-search {
    display: none;
  }
  h1 {
    font-weight: 700;
    font-size: 26px;
    color: #333333;
    margin: 0 auto;
  }
  span {
    color: #828282;
  }

  @media (min-width: 700px) {
    flex-wrap: wrap;
    h1 {
      width: 100%;
    }
    ul {
      flex-wrap: wrap;
    }

    .section-search-listProduct {
      width: 94%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px 0px 20px 10px;
      h1 {
        font-weight: 700;
        font-size: 26px;
        color: #333333;
      }
      span {
        color: #828282;
      }
      .button-clean-search{
        display: initial;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  overflow-x: scroll;
  display: flex;
  width: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }
  @media only screen and (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
`;

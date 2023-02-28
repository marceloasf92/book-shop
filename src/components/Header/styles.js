import styled from "styled-components";

export const Container = styled.header`
  height: 150px;
  background-color: #e8f4f8;
  max-width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 15px #4179ce;
  margin-bottom: 10px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  width: 100%;
  padding: 0 10px;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 20px;
      text-align: center;
      color: #4179ce;
      margin-top: 10px;
    }
  }

  .container-flex {
    svg {
      margin-right: 5px;
      color: #4179ce;
    }
    button {
      font-size: 18px;
      color: #4179ce;
    }
  }
  @media only screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 50px;

    .logo {
      h1 {
        text-align: left;
        margin-bottom: 0;
        font-size: 25px;
      }
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  .container-flex {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    .numberCart {
      position: relative;
      top: -14px;
      right: -22px;
      span {
        border-radius: 100%;
        border: 1px solid transparent;
        color: #4179ce;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    button {
      background-color: transparent;
      border: 1px solid transparent;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: #547ac1;
      }
    }
  }
`;

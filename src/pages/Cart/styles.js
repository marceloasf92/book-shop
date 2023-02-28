import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 20px 100px;
  background-color: #e8f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  ul {
    width: 300px;
    list-style: none;
    padding: 0;
    height: 400px;
    overflow-y: scroll;
    background-color: #e8f4f8;
    box-shadow: 0 0 15px #456197;
    border-radius: 10px;
    color: #456197;
    ::-webkit-scrollbar {
      width: 0;
    }
    .empty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 360px;
      p {
        margin-top: 10px;
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      padding: 20px 30px;
      img {
        min-height: 100%;
        margin-right: 10px;
      }
      .containerInformation {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10px;
        width: 100%;
        h3 {
          width: 100%;
          font-size: 15px;
          text-align: center;
          margin-bottom: 10px;
        }
        p {
          width: 100%;
          text-align: center;
          font-size: 15px;
          margin-bottom: 10px;
        }
      }
    }
    @media only screen and (min-width: 768px) {
      width: 50%;
      height: 500px;
      .empty {
        height: 90%;
      }
    }
  }
  aside {
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #e8f4f8;
    margin-top: 30px;
    border-radius: 10px;
    height: 150px;
    align-items: center;
    padding: 20px;
    box-shadow: 0 0 15px #456197;
    color: #547ac1;
    div {
      display: flex;
      justify-content: space-between;
      width: 70%;
    }
    button {
      border: 1px solid transparent;
      border-radius: 5px;
      width: 150px;
      padding: 6px;
      background-color: #6495ed;
      cursor: pointer;
      color: #fff;
      border-radius: 10px;
      transition: 0.5s;
      &:hover {
        background-color: #547ac1;
      }
    }
    button:focus {
      background-color: #27314a;
    }
    @media only screen and (min-width: 900px) {
      margin-top: 0;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;

  button {
    background-color: transparent;
    border: none;
    color: #27314a;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
  }

  button:nth-child(1):hover,
  button:nth-child(1):focus {
    color: green;
  }

  button:nth-child(2):hover,
  button:nth-child(2):focus {
    color: red;
  }

  button:nth-child(3):hover,
  button:nth-child(3):focus {
    color: orangered;
  }
`;

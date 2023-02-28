import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin: 20px 10px 20px 10px;
  height: 400px;
  border: 1px solid transparent;
  padding: 10px;
  color: #456197;
  box-shadow: 0 0 1em #456197;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #f0ffff;
  }
  h3 {
    text-align: center;
    font-size: 16px;
    width: 95%;
    margin-bottom: 10px;
    height: 50px;
  }
  img {
    width: 150px;
    height: 180px;
  }
  button {
    padding: 10px;
    border: 1px solid transparent;
    background-color: #6495ed;
    cursor: pointer;
    color: #fff;
    border-radius: 10px;
    transition: 0.5s;
    width: 150px;
    &:hover {
      background-color: #547ac1;
      box-shadow: 0 0 1em #6495ed;
    }
  }
  button:focus {
    background-color: #27314a;
  }
  @media only screen and (min-width: 768px) {
    margin: 20px 20px 20px 20px;
    width: 300px;
  }
`;

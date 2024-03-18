import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Input, Button } from "antd";

export const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    &:hover{
      color: inherit;
    }
    &:active{
      color: inherit;
    }
  }
`;
export const InputStyle = styled(Input)`
  &:hover {
    border: 1px solid #429c82;
  }
  &:focus {
    border: 2px solid #429c82;
  }
`;

export const ButtonStyle = styled.button`
  max-width: 150px;
  height: 35px;
  border-radius: 8px;
  padding: 8px 20px;
  box-sizing: border-box;
  background-color: #429c82;
  margin: 20px 0;
  border: none;
  color: white;
  &:hover {
    background-color: #257c63;
  }
  &:active {
    background-color: #15503f;
  }
`;

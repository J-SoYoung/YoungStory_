import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Input, Select, Button } from "antd";

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
  p, div, h1, h2, h3, h4 { 
    margin : 0; 
    padding: 0; 
  }
`;
export const InputStyle = styled(Input)`
  &:hover {
    border: 1px solid #429c82;
  }
  &:focus {
    border: 1px solid #429c82;
    box-shadow: 0px 0px 5px #429c82;
  }
`;

export const TextAreaStyle = styled(Input.TextArea)`
  &:hover {
    border: 1px solid #429c82;
  }
  &:focus {
    border: 1px solid #429c82;
    box-shadow: 0px 0px 5px #429c82;
  }
`;

export const SelectStyle = styled(Select)`
  &:hover {
    border: 1px solid #429c82 !important;
  }
  &:focus {
    box-shadow: 0px 0px 5px #429c82;
    border: 1px solid #429c82;
    box-shadow: 0px 0px 5px #429c82;
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
  cursor: pointer;
  &:hover {
    background-color: #257c63;
  }
  &:active {
    background-color: #15503f;
  }
`;

import React from "react";
import styled from "styled-components";

const TILPostView = ({ data }) => {
  const ContentsBox = styled.div`
    width: 200px;
    height: 200px;
    top: 50%;
    transform: translateY(-50%);
    background-color: tomato;
    position: fixed;
  `;
  return <ContentsBox>캘린더</ContentsBox>;
};

export default TILPostView;

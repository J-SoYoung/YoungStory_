import React from "react";
import styled from "styled-components";

const PortFoiloPostView = ({ data }) => {

  const PorfolioContain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const PorfolioBox = styled.div`
    background-color: #fff3bf;
    padding: 16px 10px;
    box-sizing: border-box;
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
  `;
  const ImageBox = styled.div`
    border: 1px solid teal;
    width: 250px;
    height: 250px;
    margin-right: 8pt;
  `;
  const TextBox = styled.div`
    /* width: 100%; */
    height: 140px;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    & > h4 {
      font-size: 17px;
      font-weight: 600;
    }
  `;

  if (!data) return null;
  return (
    <PorfolioContain>
      {data?.map((d) => (
        <PorfolioBox key={d.id}>
          <ImageBox>
            {/* 이미지 추가 */}
            {/* <img src={d.img} alt={d.img} width={150} height={150} /> */}
          </ImageBox>
          <TextBox>
            <h4>{d.title}</h4>
            <div>{d.content}</div>
          </TextBox>
        </PorfolioBox>
      ))}
    </PorfolioContain>
  );
};

export default PortFoiloPostView;

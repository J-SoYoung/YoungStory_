import React from "react";
import styled from "styled-components";

const PortFoiloPostView = ({ data }) => {
  const PostBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `;
  const ImageBox = styled.div`
    background-color: #eee;
    width: 150px;
    height: 150px;
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
  return (
    <div>
      {data.map((d) => (
        <PostBox>
          <ImageBox>
            <img src={d.img} alt={d.img} />
          </ImageBox>
          <TextBox>
            <h4>{d.title}</h4>
            <div>{d.content}</div>
          </TextBox>
        </PostBox>
      ))}
    </div>
  );
};

export default PortFoiloPostView;

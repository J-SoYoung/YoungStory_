import React from "react";
import Image from "next/image";
import styled from "styled-components";
import exampleImage from "/assets/images/ex1.svg";

const StudyNotePostView = ({ data }) => {
  const PostBox = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0;
    padding: 8px;
    box-sizing: border-box;
    &:hover {
      background-color: #eee;
      border-radius: 8px;
    }
  `;

  const Content = styled.div`
    width: 80%;
    height: 100%;
    color: #495057;
    font-size: 14px;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
  const ImageBox = styled.div`
    width: 20%;
    height: 144px;
    margin-right: 10px;
    padding: 2px;
    border-radius: 8px;
    border: 1px solid lightgray;
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  `;
  const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span.date {
      font-size: 13px;
    }
  `;

  if (!data) return null;
  return (
    <div>
      {data?.map((d) => {
        return (
          <PostBox key={d.id}>
            <ImageBox>
              {d.Images?.length > 0 ? (
                <img
                  src={`http://localhost:3065/${d.Images[0]?.src}`}
                  alt={d.id}
                />
              ) : (
                <Image src={exampleImage} width={120} height={140} alt={d.id} />
              )}
            </ImageBox>
            <Content>
              <Title>
                <span className="title">{d.title}</span>
                <span className="date">{d.createdAt.split("T")[0]}</span>
              </Title>
              <div>{d.content}</div>
            </Content>
          </PostBox>
        );
      })}
    </div>
  );
};

export default StudyNotePostView;

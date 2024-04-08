import React from "react";
import styled from "styled-components";

const StudyNotePostView = ({ data }) => {
  const PostBox = styled.div`
    width: 100%;
    height: 140px;
    margin: 10px 0;
  `;
  const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span.date {
      font-size: 13px;
    }
  `;
  const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100px;
    color: #a6a6a6;
    font-size: 16px;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

  return (
    <div>
      {data.map((d) => (
        <PostBox>
          <Title>
            <span className="title">{d.title}</span>
            <span className="date">{new Date().toISOString().split("T")[0]}</span>
          </Title>
          <Content>{d.content}</Content>
        </PostBox>
      ))}
    </div>
  );
};

export default StudyNotePostView;

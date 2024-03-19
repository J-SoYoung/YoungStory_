import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { dummydata } from "../dummy/data";
import styled from "styled-components";
import CommentForm from "../components/comment/CommentForm";

const Detail = () => {
  const data = dummydata[0];
  const DetailBox = styled.div`
    width: 90%;
    margin: 30px auto;
    padding: 16px;
    box-sizing: border-box;
  `;

  const ContentsBox = styled.div`
    & > div.title_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      box-sizing: border-box;
    }
    & > div.contents_box {
      background-color: #f5f5f5;
      min-height: 350px;
      margin: 0 auto;
      padding: 16px;
      box-sizing: border-box;
    }
  `;

  return (
    <AppLayout>
      <DetailBox>
        <ContentsBox>
          <div className="title_box">
            <h1>{data.title}</h1>
            <p>{data.createAt}</p>
          </div>
          <div className="contents_box">{data.description}</div>
        </ContentsBox>
        <CommentForm/>
      </DetailBox>
    </AppLayout>
  );
};

export default Detail;

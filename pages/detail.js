import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { Avatar, Button, Comment, Form, Input } from "antd";
import { dummydata } from "../dummy/data";
import styled from "styled-components";

const Detail = () => {
  const data = dummydata[0];
  console.log(data);

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

      background-color: #F5F5F5;
      min-height: 350px;
      margin: 0 auto;
      padding: 16px;
      box-sizing: border-box;
    }
  `;

  const CommentBox = styled.div`

    margin: 20px 0;
  `;

  const onSubmitComment = () => {};
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
        <CommentBox>
          <Form onFinish={onSubmitComment}>
            <Form.Item>
              <Input.TextArea
                // value={commentText}
                // onChange={onChangeCommentText}
                rows={4}
              />
              <Button type="primary" htmlType="submit">
                삐약
              </Button>
            </Form.Item>
          </Form>
          <div>{`${data.comments.length}개의 댓글`}</div>
          {data.comments.map((comment, idx) => {
            return (
              <Comment
                key={idx}
                author={comment.user}
                avatar={<Avatar>{comment.user[0]}</Avatar>}
                content={comment.contents}
              />
            );
          })}
        </CommentBox>
      </DetailBox>
    </AppLayout>
  );
};

export default Detail;

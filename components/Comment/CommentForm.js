import { Avatar, Comment, Form } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonStyle, TextAreaStyle } from "../globalStyle/style";
import { dummydata } from "../../dummy/data";

const CommentBox = styled.div`
  margin: 20px 0;
  .comment_input {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    textarea {
      width: 100%;
      height: 100px;
      margin-right: 10px;
      padding: 16px;
      box-sizing: border-box;
      resize: none;
      border-radius: 8px;
    }
    button {
      width: 80px;
      height: 100px;
      margin: 0;
    }
  }
`;

const CommentForm = () => {
  const data = dummydata[0];
  const [comment, setComment] = useState("");
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onSubmitComment = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <CommentBox>
      <Form onFinish={onSubmitComment}>
        <Form.Item>
          <div className="comment_input">
            <TextAreaStyle
              value={comment}
              onChange={onChangeComment}
              rows={4}
              placeholder="댓글을 작성해주세요"
            />
            <ButtonStyle htmlType="submit">
              댓글 작성
            </ButtonStyle>
          </div>
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
  );
};

export default CommentForm;

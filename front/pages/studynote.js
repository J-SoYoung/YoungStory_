import React, { useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  HeartOutlined,
  LikeFilled,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Form, Input } from "antd";
import PostForm from "../components/PostForm/PostForm";
import CommentForm from "../components/Comment/CommentForm";
import FollowButton from "../components/Follow/FollowButton";
import { ButtonStyle } from "../components/globalStyle/style";

const NoteStyle = styled.div`
  height: 134px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #eee;
  margin: 16px;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  & > div.title {
    padding: 0 16px 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  cursor: pointer;
`;

const Studynote = () => {
  const { mainPosts } = useSelector((state) => state.post);
  console.log(mainPosts);

  const [commentOpen, setCommentOpen] = useState(false);
  const onToggleCommentOpen = () => {
    setCommentOpen(!commentOpen);
  };
  const [liked, setLiked] = useState(false);
  const onToggleLike = () => {
    setLiked(!LikeFilled);
  };

  return (
    <AppLayout>
      <h1>Studynote</h1>

      <PostForm />
      {mainPosts.length < 1 ? (
        <p>노트가 없습니다</p>
      ) : (
        mainPosts.map((post) => (
          <>
            <Card
              actions={[
                <RetweetOutlined key="retweet" />,
                liked ? (
                  <HeartTwoTone
                    key="heart2"
                    twoToneColor="#eb2f96"
                    onClick={onToggleLike}
                  />
                ) : (
                  <HeartOutlined key="heart" onClick={onToggleLike} />
                ),
                <MessageOutlined key="message" onClick={onToggleCommentOpen} />,
              ]}
              title={post.title}
              extra={
                <>
                  <FollowButton />
                  <span> </span>
                  {post.createAt}
                </>
              }
            >
              <Card.Meta
                avatar={<Avatar>{post.User.username[0]}</Avatar>}
                description={
                  <>
                    {post.categories}
                    <p>{post.description}</p>
                  </>
                }
              />
            </Card>
            {commentOpen && <CommentForm />}
          </>
        ))
      )}
    </AppLayout>
  );
};

export default Studynote;

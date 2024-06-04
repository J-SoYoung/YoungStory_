import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MENU_POSTS_REQUEST } from "../reducers/post";
import styled from "styled-components";

import AppLayout from "../components/AppLayout/AppLayout";

const MenuTil = () => {
  const dispatch = useDispatch();
  const { loadMenuPostsLoading, loadMenuPostsError, Til } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (loadMenuPostsError) {
      alert(loadMenuPostsError);
    }
    if (loadMenuPostsLoading) {
      <div>로딩중</div>;
    }
  }, [loadMenuPostsLoading, loadMenuPostsError]);

  useEffect(() => {
    dispatch({
      type: LOAD_MENU_POSTS_REQUEST,
      category: "Til",
    });
  }, []);

  if (!Til[0]) return <p>로딩중</p>;

  return (
    <AppLayout>
      <SubTitle>Today I Learn</SubTitle>
      {Til[0].map((p, i) => (
        <Post key={i}>
          <p>{p.createdAt.split('T')[0]}</p>
          <p className="title">{p.title}</p>
          <div className="content">{p.content}</div>
        </Post>
      ))}
    </AppLayout>
  );
};

const SubTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;
const Post = styled.div`
  max-width: 760px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  & > p.title {
    font-size: 18px;
    font-weight: 600;
  }
  & > div.content {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    background-color: #429c82;
    color: white;
    font-weight: 500;
  }
`;
export default MenuTil;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MENUPOSTS_REQUEST } from "../reducers/post";
import styled from "styled-components";

import AppLayout from "../components/AppLayout/AppLayout";

const MenuTil = () => {
  const dispatch = useDispatch();
  const { loadMenuPostsLoading, loadMenuPostsError, mainPosts } = useSelector(
    (state) => state.post
  );
  const post = mainPosts.filter((m) => m.categories === "til");
  console.log(post);

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
      type: LOAD_MENUPOSTS_REQUEST,
      categories: "til",
    });
  }, [mainPosts]);

  return (
    <AppLayout>
      <SubTitle>Today I Learn</SubTitle>
      {post.map((p, i) => (
        <Post key={i}>
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MENUPOSTS_REQUEST } from "../reducers/post";

import AppLayout from "../components/AppLayout/AppLayout";
import StudyNotePostView from "../components/HomePostView/StudyNotePostView";

const menuStudynote = () => {
  const dispatch = useDispatch();
  const { loadMenuPostsLoading, loadMenuPostsError, mainPosts } = useSelector(
    (state) => state.post
  );
  const post = mainPosts.filter((m) => m.categories === "studyNote");
  console.log(post);

  useEffect(() => {
    if (loadMenuPostsError) {
      alert(loadMenuPostsError);
    }
    if (loadMenuPostsLoading) {
      <div>로딩중</div>;
    }
  }, [loadMenuPostsError, loadMenuPostsLoading]);

  useEffect(() => {
    dispatch({
      type: LOAD_MENUPOSTS_REQUEST,
      categories: "studyNote",
    });
  }, [mainPosts]);

  return (
    <AppLayout>
      <h1>Studynote</h1>
      <HashtagsBox>
        <span>JavaScript</span>
        <span>React</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Web</span>
        <span>CS</span>
      </HashtagsBox>
      <StudyNotePostView data={post} />
    </AppLayout>
  );
};

const HashtagsBox = styled.div`
  margin: 40px 0;
  & > span {
    background-color: #eee;
    padding: 8px 10px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 8px;
    cursor: pointer;
  }
  & > span:hover {
    background-color: #FCBE24;
    color: white;
    font-weight: 600;
  }
`;
export default menuStudynote;

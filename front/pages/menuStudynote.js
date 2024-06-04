import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MENU_POSTS_REQUEST } from "../reducers/post";

import AppLayout from "../components/AppLayout/AppLayout";
import StudyNotePostView from "../components/HomePostView/StudyNotePostView";

const menuStudynote = () => {
  const dispatch = useDispatch();
  const { loadMenuPostsLoading, loadMenuPostsError, StudyNote } = useSelector(
    (state) => state.post
  );

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
      type: LOAD_MENU_POSTS_REQUEST,
      category: "StudyNote",
    });
  }, []);

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
      <StudyNotePostView data={StudyNote[0]} />
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
    background-color: #fcbe24;
    color: white;
    font-weight: 600;
  }
`;
export default menuStudynote;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "antd";

import AppLayout from "../components/AppLayout/AppLayout";
import StudyNotePostView from "../components/HomePostView/StudyNotePostView";
import PortFoiloPostView from "../components/HomePostView/PortFoiloPostView";
import { LOAD_USER_INFO_REQUEST } from "../reducers/user";
import { LOAD_HOME_POSTS_REQUEST } from "../reducers/post";

const HomeContents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { studyNote, portfolio } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_HOME_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_INFO_REQUEST,
    });
  }, []);

  return (
    <AppLayout>
      <HomeContents>
        <h1>Study Note</h1>
        <StudyNotePostView data={studyNote} />
        <h1>PortFoilo</h1>
        <PortFoiloPostView data={portfolio} />
      </HomeContents>
    </AppLayout>
  );
};

export default Home;

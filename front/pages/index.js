import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "antd";

import AppLayout from "../components/AppLayout/AppLayout";
import StudyNotePostView from "../components/HomePostView/StudyNotePostView";
import PortFoiloPostView from "../components/HomePostView/PortFoiloPostView";
import { LOAD_USER_INFO_REQUEST } from "../reducers/user";

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
  const { mainPosts } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  console.log(me);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_INFO_REQUEST,
    });
  }, []);

  // main에는 최근게시물 5개 / 2개
  const studyNotes = mainPosts.filter((m) => m.categories === "studyNote");
  const potfolios = mainPosts.filter((m) => m.categories === "portfolio");

  return (
    <AppLayout>
      <HomeContents>
        <h1>Study Note</h1>
        <StudyNotePostView data={studyNotes} />
        <h1>PortFoilo</h1>
        <PortFoiloPostView data={potfolios} />
      </HomeContents>
    </AppLayout>
  );
};

export default Home;

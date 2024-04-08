import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "antd";

import AppLayout from "../components/AppLayout/AppLayout";
import StudyNotePostView from "../components/HomePostView/StudyNotePostView";
import PortFoiloPostView from "../components/HomePostView/PortFoiloPostView";

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
  console.log(mainPosts);
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

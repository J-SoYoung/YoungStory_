import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { Card } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";

const HomeContents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
`;
const CardStyle = styled(Card)`
  margin: 8px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Home = () => {
  const blogData = useSelector((state) => state.post.mainPosts);

  return (
    <AppLayout>
      <h1>HOME</h1>
      {/* 최근게시물 3개 */}
      <HomeContents>
        {blogData.map((data) => (
          <CardStyle
            key={data.postId}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={data.img} />}
          >
            <Card.Meta title={data.title} description={data.description} />
          </CardStyle>
        ))}

        {/* 최근 포트폴리오 3개 */}
      </HomeContents>
    </AppLayout>
  );
};

export default Home;

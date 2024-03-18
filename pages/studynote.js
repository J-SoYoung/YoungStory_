import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import { dummydata } from "../dummy/data";
import Link from "next/link";

const NoteStyle = styled.div`
  height: 138px;
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
  return (
    <AppLayout>
      <h1>Studynote</h1>
      {dummydata.map((data) => (
        <Link href={`/detail`}>
          {/* <Link href={`/detail/${data.postId}`}> */}
          <NoteStyle>
            <div className="title">
              <div>
                <span>{data.title}</span>
              </div>
              <span>{data.createAt}</span>
            </div>
            <div>{data.description}</div>
          </NoteStyle>
        </Link>
      ))}
    </AppLayout>
  );
};

export default Studynote;

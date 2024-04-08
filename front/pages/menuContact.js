import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Image from "next/image";
import styled from "styled-components";

import profileImage from "../assets/images/profile.jpg";
import IconGithub from "../assets/icons/icon_github.svg";
import IconNotion from "../assets/icons/icon_notion.svg";
import IconTIL from "../assets/icons/icon_TIL.svg";

import { LinkMenu } from "../components/AppLayout/styles";

const menuContact = () => {
  const LinkMenu = styled.div`
    text-align: center;
    & a {
      display: inline-block;
      margin: 14px;
    }
  `;

  return (
    <AppLayout>
      <h1>Contact</h1>
      <Image src={profileImage} alt="soyoung-profile" width={250} />
      <div>
        👋 Hi, I’m @SoYoung-Jung.<br></br> 
        👀 I’m interested in front-end development <br></br>
        🌱 I’m currently learning JavaScript, React, and Next.js <br></br>
        💞️ I’m looking to collaborate on studying these technologies together
      </div>
      <LinkMenu>
        <a
          href="https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={IconNotion} alt="Notion 페이지로 이동" width={40} />
        </a>
        <a href="https://github.com/J-SoYoung" target="_blank" rel="noreferrer">
          <Image src={IconGithub} alt="Github 페이지로 이동" width={40} />
        </a>
        <a href="https://j-soyoung.github.io/" target="_blank" rel="noreferrer">
          <Image src={IconTIL} alt="개발 TIL로 이동" width={40} />
        </a>
      </LinkMenu>
    </AppLayout>
  );
};

export default menuContact;

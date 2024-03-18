import React, { useState } from "react";
import Link from "next/link";
import {
  ProfileOutlined,
  PhoneOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

import Image from "next/image";
import IconGithub from "../../assets/icons/icon_github.svg";
import IconNotion from "../../assets/icons/icon_notion.svg";
import IconTIL from "../../assets/icons/icon_TIL.svg";
import IconLOGO from "../../assets/icons/logo.png";

import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  Header,
  TextContainer,
  MainBlogBox,
  Sidebar,
  Contents,
  LinkMenu,
} from "./styles";
import { ButtonStyle, GlobalStyle } from "../common/commonStyles";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header>
        <TextContainer>
          <div>
            <Link href="/">
              <Image src={IconLOGO} width={85} alt="youngStory blog icon" />
              <sapn>YoungStory</sapn>
            </Link>
          </div>

          <ButtonStyle>
            {isLoggedIn ? (
              <Link href="/postAdd">글작성</Link>
            ) : (
              <Link href="/login">로그인</Link>
            )}
          </ButtonStyle>
        </TextContainer>
      </Header>
      <MainBlogBox>
        <TextContainer>
          <Sidebar>
            <Menu mode="vertical" style={{ width: 200 }}>
              <Menu.Item key="studynote" icon={<ProfileOutlined />}>
                <Link href="/studynote">DEV STUDY-NOTE</Link>
              </Menu.Item>
              <Menu.Item key="portfolio" icon={<LaptopOutlined />}>
                <Link href="/portfolio">PORTFOLIO</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<PhoneOutlined />}>
                <Link href="/contact">CONTACT</Link>
              </Menu.Item>
            </Menu>
            <LinkMenu>
              <a
                href="https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355"
                target="_blank"
              >
                <Image src={IconNotion} alt="Notion 페이지로 이동" width={40} />
              </a>
              <a href="https://github.com/J-SoYoung" target="_blank">
                <Image src={IconGithub} alt="Github 페이지로 이동" width={40} />
              </a>
              <a href="https://j-soyoung.github.io/" target="_blank">
                <Image src={IconTIL} alt="개발 TIL로 이동" width={40} />
              </a>
            </LinkMenu>
          </Sidebar>
          <Contents>{children}</Contents>
        </TextContainer>
      </MainBlogBox>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

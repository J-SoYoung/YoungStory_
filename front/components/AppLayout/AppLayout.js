import React from "react";
import Link from "next/link";
import {
  PhoneOutlined,
  LaptopOutlined,
  BookOutlined,
  SignatureOutlined
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
import { GlobalStyle } from "../globalStyle/style";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../reducers/user";

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const onClickLogout = () => {
    dispatch(logoutAction());
  };
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

          <p>
            {isLoggedIn ? (
              <>
                <Link href="/postAdd">글작성</Link>
                <button onClick={onClickLogout}>로그아웃</button>
              </>
            ) : (
              <>
              <Link href="/postAdd">글작성 임시 / </Link>
              <Link href="/login">로그인</Link>
              </>
            )}
          </p>
        </TextContainer>
      </Header>
      <MainBlogBox>
        <TextContainer>
          <Sidebar>
            <Menu mode="vertical" style={{ width: 200 }}>
              <Menu.Item key="til" icon={<SignatureOutlined />}>
                <Link href="/menuTil">TIL</Link>
              </Menu.Item>
              <Menu.Item key="studynote" icon={<BookOutlined />}>
                <Link href="/menuStudynote">DEV STUDY-NOTE</Link>
              </Menu.Item>
              <Menu.Item key="portfolio" icon={<LaptopOutlined />}>
                <Link href="/menuPortfolio">PORTFOLIO</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<PhoneOutlined />}>
                <Link href="/menuContact">CONTACT</Link>
              </Menu.Item>
            </Menu>
            <LinkMenu>
              <a
                href="https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={IconNotion} alt="Notion 페이지로 이동" width={40} />
              </a>
              <a
                href="https://github.com/J-SoYoung"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={IconGithub} alt="Github 페이지로 이동" width={40} />
              </a>
              <a
                href="https://j-soyoung.github.io/"
                target="_blank"
                rel="noreferrer"
              >
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

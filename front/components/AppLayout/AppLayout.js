import React, { useCallback } from "react";
import Router from "next/router";
import Link from "next/link";
import {
  PhoneOutlined,
  LaptopOutlined,
  BookOutlined,
  SignatureOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";

import Image from "next/image";
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
import { LOGOUT_REQUEST } from "../../reducers/user";
import TILPostView from "../HomePostView/TILPostView";

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onClickLogout = useCallback(() => {
    if (confirm("로그아웃 하시겠습니까?")) {
      dispatch({
        type: LOGOUT_REQUEST,
      });
    }
  }, []);

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
            { me && me.id? (
              <>
                <button
                  style={{ margin: "4px" }}
                  onClick={() => Router.push("/postAdd")}
                >
                  글작성
                </button>
                <button style={{ margin: "4px" }} onClick={onClickLogout}>
                  로그아웃
                </button>
              </>
            ) : (
              <>
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
              <Menu.Item key="Til" icon={<SignatureOutlined />}>
                <Link href="/menuTil">TIL</Link>
              </Menu.Item>
              <Menu.Item key="Studynote" icon={<BookOutlined />}>
                <Link href="/menuStudynote">DEV STUDY-NOTE</Link>
              </Menu.Item>
              <Menu.Item key="Portfolio" icon={<LaptopOutlined />}>
                <Link href="/menuPortfolio">PORTFOLIO</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<PhoneOutlined />}>
                <Link href="/menuContact">CONTACT</Link>
              </Menu.Item>
            </Menu>
          </Sidebar>
          <Contents>{children}</Contents>
        </TextContainer>
        {/* <TILPostView data={tilData} /> */}
      </MainBlogBox>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

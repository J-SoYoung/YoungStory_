import React from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

import AppLayout from "../components/AppLayout/AppLayout";
import { useInput } from "../hooks/useInput";
import { Form } from "antd";
import { ButtonStyle, InputStyle } from "../components/globalStyle/style";

const Login = () => {
  const dispatch = useDispatch();
  const [username, onChangeUsername, resetUsername] = useInput("");
  const [password, onChangePassword, resetPassword] = useInput("");

  const onSubmit = () => {
    dispatch(loginAction(username));
    alert("로그인성공, 페이지이동 -> home");

    resetUsername();
    resetPassword();
  };
  const clickMovePageSignup = () => {
    Router.push("/signup");
  };
  return (
    <AppLayout>
      <h1>Login</h1>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <br />

          <InputStyle
            type="text"
            placeholder="username을 입력하세요"
            name="username"
            value={username}
            onChange={onChangeUsername}
            required
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="user_password">password</label>
          <br />
          <InputStyle
            type="password"
            placeholder="password를 입력하세요"
            name="user_password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonStyle> 로그인하기 </ButtonStyle>
        <p onClick={clickMovePageSignup} style={{ cursor: "pointer" }}>
          아직 회원이 아니신가요? 회원가입하러 가기
        </p>
      </Form>
    </AppLayout>
  );
};

export default Login;

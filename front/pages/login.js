import React, { useEffect } from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_REQUEST, loginAction } from "../reducers/user";

import AppLayout from "../components/AppLayout/AppLayout";
import { useInput } from "../hooks/useInput";
import { Form } from "antd";
import { ButtonStyle, InputStyle } from "../components/globalStyle/style";

const Login = () => {
  const dispatch = useDispatch();
  const { loginLoaing, me } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (!loginLoaing && me) {
      alert(`환영합니다. ${me.nickname}님!`);
      Router.push("/");
    }
  }, [loginLoaing, me]);

  const onSubmit = () => {
    dispatch({
      type: LOGIN_REQUEST,
      data: { email, password },
    });
    // alert("로그인성공, 페이지이동 -> home");
  };

  return (
    <AppLayout>
      <h1>Login</h1>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <br />

          <InputStyle
            type="email"
            placeholder="email을 입력하세요"
            name="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <InputStyle
            type="password"
            placeholder="password를 입력하세요"
            name="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonStyle loading={loginLoaing}> 로그인하기 </ButtonStyle>
        <p onClick={() => Router.push("/signup")} style={{ cursor: "pointer" }}>
          아직 회원이 아니신가요? 회원가입하러 가기
        </p>
      </Form>
    </AppLayout>
  );
};

export default Login;

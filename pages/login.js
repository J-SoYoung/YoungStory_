import React, { useState } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { Button, Checkbox, Form, Input } from "antd";
import { ButtonStyle, InputStyle } from "../components/common/commonStyles";

const dummyUser = {
  username: "thdud",
  password: "thdud",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const onSubmit = () => {
    console.log(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <AppLayout>
      <h1>Login</h1>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <br />

          <InputStyle
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
            placeholder="password를 입력하세요"
            name="user_password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonStyle> 로그인하기 </ButtonStyle>
      </Form>
    </AppLayout>
  );
};

export default Login;

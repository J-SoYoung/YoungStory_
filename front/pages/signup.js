import React, { useState, useCallback, useEffect } from "react";
import Router from "next/router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_REQUEST } from "../reducers/user";

import { Form, Checkbox } from "antd";
import { useInput } from "../hooks/useInput";
import AppLayout from "../components/AppLayout/AppLayout";
import {
  ButtonStyle,
  ErrorMessage,
  InputStyle,
} from "../components/globalStyle/style";

const Signup = () => {
  const dispatch = useDispatch();
  const { signupLoading, signupDone } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  useEffect(() => {
    if (!signupLoading && signupDone) {
      alert("회원가입 되셨습니다. 로그인 페이지로 이동합니다");
      Router.push("/login");
    }
  }, [signupLoading, signupDone]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password, passwordCheck]
  );
  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
    },
    [term]
  );

  const onSubmitSignup = useCallback(() => {
    if (!email || !nickname) {
      alert("빈칸을 채워주세요");
      return;
    }
    if (password !== passwordCheck) return setPasswordError(true);
    if (!term) return setTermError(true);

    console.log("회원가입", email, nickname, password);
    dispatch({
      type: SIGNUP_REQUEST,
      data: { email, nickname, password },
    });
    // dispatch(loginAction(username));
  }, [email, nickname, password, passwordCheck, term]);

  return (
    <AppLayout>
      <h1>Signup</h1>
      <span>Young's Story에 오신 걸 환영합니다</span>
      <Form onFinish={onSubmitSignup}>
        <div>
          <br />
          <label htmlFor="nickname">nickname</label>
          <InputStyle
            type="text"
            placeholder="nickname을 입력하세요"
            name="nickname"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <br />
          <label htmlFor="email">email</label>
          <InputStyle
            type="email"
            placeholder="email을 입력하세요"
            name="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <br />
          <label htmlFor="password">password</label>
          <InputStyle
            type="password"
            placeholder="password를 입력하세요"
            name="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <br />
          <label htmlFor="passwordCheck">password 확인</label>
          <InputStyle
            type="password"
            placeholder="password를 한번 더 입력하세요"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
        </div>
        {passwordError && (
          <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>
        )}

        <div>
          <br />
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            Young와 프로그래밍 공부 하시겠습니까?
          </Checkbox>
          {termError && (
            <ErrorMessage>이용약관에 동의하셔야 합니다.</ErrorMessage>
          )}
        </div>

        <ButtonStyle loading={signupLoading}> 회원가입 하기 </ButtonStyle>
        <p
          onClick={() => {
            Router.push("/login");
          }}
          style={{ cursor: "pointer" }}
        >
          회원이신가요? 로그인하러 가기
        </p>
      </Form>
    </AppLayout>
  );
};

export default Signup;

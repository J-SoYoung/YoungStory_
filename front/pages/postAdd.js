import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useInput } from "../hooks/useInput";
import AppLayout from "../components/AppLayout/AppLayout";
import {
  ButtonStyle,
  InputStyle,
  SelectStyle,
  TextAreaStyle,
} from "../components/globalStyle/style";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST } from "../reducers/post";

const PostAdd = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, addPostLoading, addPostDone, addPostError } = useSelector(
    (state) => state.post
  );
  // console.log(mainPosts, me);

  const [title, handleChangetitle] = useInput("");
  const [content, handleChangeContent] = useInput("");
  const [category, setCategory] = useState("category");

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    if (!me) {
      alert("로그인이 필요한 서비스입니다");
      Router.push("/");
    }
  }, [me]);

  useEffect(() => {
    if (!addPostLoading && addPostDone) {
      // 포스트 작성하고 이어서 글작성이 안됨. 어떤 조건??? 새로고침 해서 저 조건들을 업데이트 해야함
      alert("ㅇㅇㅇㅇ");
      Router.push("/");
    } else if (addPostError) {
      alert("포스트 작성 실패");
      console.error(addPostError);
    }
  }, [addPostDone, addPostLoading, addPostError]);

  const onSubmitPost = () => {
    if (!title || !content || category === "category") {
      alert("빈칸을 작성해주세요");
      return;
    }

    console.log("포스트작성", title, category, content);
    dispatch({
      type: ADD_POST_REQUEST,
      data: { title, category, img: null, content: content },
    });
  };

  return (
    <AppLayout>
      <h1>PostAdd</h1>
      <Form onFinish={onSubmitPost}>
        <Form.Item>
          <InputStyle
            value={title}
            onChange={handleChangetitle}
            placeholder="제목을 입력해주세요"
          />
          <SelectStyle
            value={category}
            style={{ width: 120 }}
            onChange={handleChangeCategory}
            options={[
              { value: "til", label: "Today I Learn" },
              { value: "studyNote", label: "Study Note" },
              { value: "portfolio", label: "Portfolio" },
            ]}
          />
          <TextAreaStyle
            rows={4}
            value={content}
            onChange={handleChangeContent}
            placeholder="내용을 입력해주세요"
          />
          <ButtonStyle htmltype="submit">포스트 작성</ButtonStyle>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};

export default PostAdd;

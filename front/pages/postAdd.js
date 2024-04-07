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
  const username = useSelector((state) => state.user.me.username);
  const { mainPosts, addPostLoading, addPostDone, addPostError } = useSelector(
    (state) => state.post
  );
  console.log(mainPosts);

  const [title, handleChangetitle] = useInput("");
  const [content, handleChangeContent] = useInput("");
  // const [categories, handleChangeCategories] = useInput("categories");
  const [categories, setCategoreis] = useState("categories");

  const handleChangeCategories = (value) => {
    setCategoreis(value);
  };

  useEffect(() => {
    if (addPostDone) {
      Router.push("/");
    } else if (addPostError) {
      alert(addPostError);
    }
  }, [addPostDone]);

  const onSubmitPost = () => {
    if (!title || !content || categories === "categories") {
      alert("빈칸을 작성해주세요");
      return;
    }
    
    const dummyNewPost = {
      postId: new Date().getTime(),
      User: { username: username, id: 1 },
      title,
      categories,
      img: null,
      content: content,
      Comments: [],
    };

    dispatch({
      type: ADD_POST_REQUEST,
      data: dummyNewPost,
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
            value={categories}
            style={{ width: 120 }}
            onChange={handleChangeCategories}
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
          <ButtonStyle htmltype="submit" loading={addPostLoading}>
            포스트 작성
          </ButtonStyle>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};

export default PostAdd;

import React, { useState } from "react";
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
import { addPost } from "../reducers/post";

const PostAdd = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.me.username);
  const blogData = useSelector((state) => state.post.mainPosts);
  console.log(blogData);
  const [title, handleChangetitle, resetTitle] = useInput("");
  const [textarea, handleChangeTextArea, resetTextarea] = useInput("");
  const [categories, setCategoreis] = useState("categories");

  const handleChangeCategories = (value) => {
    setCategoreis(value);
  };

  const onSubmitPost = () => {
    const newPost = {
      postId: new Date().getTime(),
      username: username,
      categories,
      title,
      img: null,
      description: textarea,
      createAt: new Date().toISOString().split("T")[0],
      comment: [],
    };

    console.log(newPost);
    dispatch(addPost(newPost));

    setCategoreis("categories");
    resetTitle();
    resetTextarea();
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
              { value: "categories", label: "categories" },
              { value: "study-note", label: "study-note" },
              { value: "portfolio", label: "portfolio" },
            ]}
          />
          <TextAreaStyle
            rows={4}
            value={textarea}
            onChange={handleChangeTextArea}
            placeholder="내용을 입력해주세요"
          />
          <ButtonStyle htmlType="submit">포스트 작성</ButtonStyle>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};

export default PostAdd;

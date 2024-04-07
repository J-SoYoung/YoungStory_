import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { Form } from "antd";
import {
  ButtonStyle,
  InputStyle,
  SelectStyle,
  TextAreaStyle,
} from "../globalStyle/style";
import { addPost } from "../../reducers/post";
import shortid from "shortid";

const PostForm = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.me.username);
  const blogData = useSelector((state) => state.post.mainPosts);
  const [title, handleChangetitle, resetTitle] = useInput("");
  const [textarea, handleChangeTextArea, resetTextarea] = useInput("");
  const [categories, setCategoreis] = useState("categories");

  const handleChangeCategories = (value) => {
    setCategoreis(value);
  };

  const onSubmitPost = () => {
    const newPost = {
      postId: new Date().getTime(),
      User: { username: username, id: shortid },
      categories,
      img: null,
      title,
      description: textarea,
      createAt: new Date().toISOString().split("T")[0],
      Comment: [],
    };

    console.log(newPost);
    dispatch(addPost(newPost));

    setCategoreis("categories");
    resetTitle();
    resetTextarea();
  };

  return (
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
  );
};

export default PostForm;

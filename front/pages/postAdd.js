import React, { useCallback, useEffect, useRef, useState } from "react";
import Router from "next/router";
import { useInput } from "../hooks/useInput";
import AppLayout from "../components/AppLayout/AppLayout";
import {
  ButtonStyle,
  InputStyle,
  SelectStyle,
  TextAreaStyle,
} from "../components/globalStyle/style";
import { Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
} from "../reducers/post";
import image from "../../back/models/image";

const PostAdd = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { imagePath } = useSelector((state) => state.post);
  const { addPostLoading, addPostDone, addPostError } = useSelector(
    (state) => state.post
  );

  const [title, handleChangetitle] = useInput("");
  const [content, handleChangeContent] = useInput("");
  const [category, setCategory] = useState("category");
  const imageRef = useRef();

  useEffect(() => {
    if (!me.id) {
      alert("로그인이 필요한 서비스입니다");
      Router.push("/");
    }
  }, [me]);

  useEffect(() => {
    if(addPostDone){
      alert('포스트 작성 OK')
      setTimeout(() => {
        Router.push(`/menu${category}`);
      }, 500);
    }
    if (addPostError) {
      console.error(addPostError);
      return alert("포스트 작성 실패");
    }
  }, [addPostDone]);

  const handleChangeCategory = useCallback((value) => {
    setCategory(value);
  });

  const onChangeImage = useCallback((e) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (!file) return;

    const imageFormData = new FormData();
    imageFormData.append("image", file);
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onClickImageUpload = useCallback(
    (e) => {
      e.preventDefault();
      imageRef.current.click();
    },
    [imageRef.current]
  );

  const onRemoveImage = useCallback((index) => {
    console.log(index);
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });

  const onSubmitPost = useCallback(() => {
    if (!title || !content) {
      alert("빈칸을 작성해주세요");
      return;
    }
    if (category === "category") {
      alert("카테고리를 설정해주세요");
    }

    const formData = new FormData();
    imagePath.forEach((p, i) => formData.append("image", p));
    formData.append("content", content);
    formData.append("title", title);
    formData.append("category", category);

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [title, category, content, imagePath]);

  if (addPostLoading) {
    <span>로딩중</span>;
  }

  return (
    <AppLayout>
      <h1>PostAdd</h1>
      <Form onFinish={onSubmitPost} encType="multipart/form-data">
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
              { value: "Til", label: "Today I Learn" },
              { value: "StudyNote", label: "Study Note" },
              { value: "Portfolio", label: "Portfolio" },
            ]}
          />
          <br />
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageRef}
            onChange={onChangeImage}
          />
          <button onClick={onClickImageUpload}>이미지 업로드</button>
          {imagePath.map((v, i) => (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={`http://localhost:3065/${v}`}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button onClick={() => onRemoveImage(i)}>제거</Button>
              </div>
            </div>
          ))}
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

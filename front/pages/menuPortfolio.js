import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MENU_POSTS_REQUEST } from "../reducers/post";
import PortFoiloPostView from "../components/HomePostView/PortFoiloPostView";

const MenuPortfolio = () => {
  const dispatch = useDispatch();
  const { loadMenuPostsLoading, loadMenuPostsError, portfolio } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (loadMenuPostsError) {
      alert(loadMenuPostsError);
    }
    if (loadMenuPostsLoading) {
      <div>로딩중</div>;
    }
  }, [loadMenuPostsError, loadMenuPostsLoading]);

  useEffect(() => {
    dispatch({
      type: LOAD_MENU_POSTS_REQUEST,
      category: "portfolio",
    });
  }, []);

  return (
    <AppLayout>
      <h1>Portfolio</h1>
      <PortFoiloPostView data={portfolio[0]} />
      {/* {post.map((p) => (
        <div>
          <img />
          <p>{p.title}</p>
          <div>{p.content}</div>
        </div>
      ))} */}
    </AppLayout>
  );
};

export default MenuPortfolio;

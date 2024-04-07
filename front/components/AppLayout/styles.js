import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;
export const Header = styled.div`
  height: 110px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  box-sizing: border-box;
  background-color: #eee;
  & > div {
    height: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const MainBlogBox = styled.div`
  margin-top: 110px;
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const Sidebar = styled.div`
  width: 200px;
  border-left: 1px solid #eee;
  min-height: 100vh;
  position: absolute;
  left: 0;
`;
export const Contents = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 200px;
  border: 1px solid #eee;
  padding: 30px;
  box-sizing: border-box;
`;
export const LinkMenu = styled.div`
  position: fixed;
  bottom: 0;
  text-align: center;
  & a {
    display: inline-block;
    margin: 14px;
  }
`;

import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
export const Header = styled.div`
  width: 100%;
  height: 110px;
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
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const Contents = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
`;
export const Sidebar = styled.div`
  width: 200px;
  border-left: 1px solid #eee;
  min-height: 100vh;
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

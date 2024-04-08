import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  & > div .sideber {
    display: flex;
    flex-direction: column;
    border: 1px solid;
  }
`;
export const Header = styled.div`
  padding: 16px;
  box-sizing: border-box;
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
  border: 1px solid blue;
  min-height: 100vh;
  margin-left: 200px;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
`;

import React from "react";
import styled from "styled-components";
import MenuBarLayout from "../../components/MenuBarLayout";
import NonUserInfo from "./components/NonUserInfo";
import MypageHeader from "./components/MypageHeader";
import BookMarkBox from "./components/BookMarkBox";

const Container = styled.div`
  width:100%;
  height: 220px;
  background-color:#F8F8FF;
  display:flex;
  justify-content:center;
  item-align:center;
`;

const MyPage = () => {
  return(
    <MenuBarLayout>
      <MypageHeader />
      <Container>
        <NonUserInfo />
      </Container>
      <BookMarkBox />
    </MenuBarLayout>
  );
}

export default MyPage;
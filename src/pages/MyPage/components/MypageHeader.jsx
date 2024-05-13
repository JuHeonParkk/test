import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color:#fff;
  margin:0; padding:0;
  width:100%;
  height:56px;
  border-bottom:1px solid #ddd;
  position:relative;
`;

const Title = styled.h2`
  width:100%;
  margin:0;padding:0;
  display:inline-block;
  margin-top:5px;
  font-size:17px;
  font-weight:bold;
  text-align:center;
  line-height:2.5;
`;

const MypageHeader = () => {
  return(
    <Container>
      <Title>마이페이지</Title>
    </Container>
  );
}

export default MypageHeader;
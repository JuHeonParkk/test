import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";

const Container = styled.div`
  width:100%;
  height: calc(100vh - 56px);
  position:relative;
`;

const EmptyPageInner = styled.div`
  width:100%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;

const IconCon = styled.div`
  display:flex;
  justify-content:center;
`;

const Title = styled.h3`
  font-size:16px;
  text-align:center;
  color:#666666;
  margin:10px 0px;
`;

const Text = styled.p`
  font-size:12px;
  text-align:center;
  color:#d9d9d9;
  margin:0;
`;

const EmptyPage = () => {
  return(
    <Container>
      <EmptyPageInner>
        <IconCon>
          <IoLocationSharp 
            size="64px" 
            color="#d9d9d9" 
            stroke="#666666" 
            strokeWidth= "5"/>
        </IconCon>
        <Title>즐겨찾기한 장소가 없습니다.</Title>
        <Text>새로운 장소를 추가해보세요!</Text>
      </EmptyPageInner>
    </Container>
  );
}

export default EmptyPage;
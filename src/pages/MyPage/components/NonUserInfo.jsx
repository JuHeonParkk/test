import React from "react";
import styled from "styled-components";
import kakaoImage from "../../../assets/icon/kakaoImage.png";
import { FaCircleUser } from "react-icons/fa6";

import { KAKAO_AUTH_URL } from "../../../shared/OAth";

const Container = styled.div`
  width:350px;
  height:180px;
  border-radius:10px;
  background-color:#fff;
  margin-top:20px;
`;


const UserProfile = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  gap:16px;
  margin-top:25px;
  margin-left:25px;
`;

const Text = styled.span`
  font-size:15px;
  font-weight:bold;
`;

const KakaoLoginButton = styled.button`
  background-color: #fee500; // 카카오 노란색
  border-radius: 12px;
  border: none;
  color: black;
  display: flex;
  align-items: center;
  font-size: 16px;
  width: 300px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  position:absolute;
  left:50%;
  transform:translate(-50%, 0);
`;

const KakaoLoginButtonImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const KakaoLoginButtonText = styled.span`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
`;


const NonUserInfo = () => {
  // kakao 로그인 버튼 누르면 REDIRECT_URL로 이동
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return(
    <Container>
      <UserProfile>
        <FaCircleUser size="58px" color="#d9d9d9"/>
        <Text>로그인이 필요합니다.</Text>
      </UserProfile>
      <KakaoLoginButton onClick={handleLogin}>
        <KakaoLoginButtonImage src={kakaoImage} alt="Kakao logo" />
        <KakaoLoginButtonText>카카오톡으로 시작하기</KakaoLoginButtonText>
      </KakaoLoginButton>
      
    </Container>
  );
}

export default NonUserInfo;
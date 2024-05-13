import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SpinnerImg from "../assets/icon/Spinner.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;
const Inner = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;
const Image = styled.img`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Text = styled.p`
  font-size:13px;
    text-align:center;
`;

const KakaoRedirect = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 인가코드추출
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    // 인가코드 보내고 토큰 받기
    const kakaoLogin = async () => {
      await axios
        .get(`http://localhost:8080/oauth2/authorization/kakao?code=${code}`)
        .then((response) => {
          localStorage.setItem('token', response.headers.authorization)
          navigate(`/`);
        })
    }
    kakaoLogin();
  },[props]);

/* 
  const getKakaoToken = () => {
    fetch(``, {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${}`,
          "Content-Type": "application/x-www-form-urlencoded" },
          body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,
      })
        .then(response => response.json())
        .then(data => {
          if(data.access_token) {
            localStorage.setItem("token", data.access_token);
            navigate("/");
          } else {
            alert("로그인에 실패했습니다.");
            navigate("/");
          }
        });    
  
    useEffect(() => {
      if(!location.search) return;
      getKakaoToken();
    },[]);
*/


  return(
    <Layout>
      <Container>
        <Inner>
          <Image src={SpinnerImg} alt="spinner" />
          <Text>
              잠시만 기다려주세요!<br/>
              로그인 중 입니다.
          </Text>
        </Inner>
      </Container>
    </Layout>
  );
}

export default KakaoRedirect;
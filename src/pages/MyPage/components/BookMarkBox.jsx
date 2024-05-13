import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5"; //장소 아이콘
import { LiaRouteSolid } from "react-icons/lia"; //경로 아이콘
import trafficicon from "../../../assets/icon/trafficlighticon.svg"
import routeicon from "../../../assets/icon/routeicon.svg"

const Container = styled.div`
  width:100%;
  height:100%;
  background-color:#fff;
  padding:10px 20px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;

`;

const BookMarkButton = styled.div`
  width:330px;
  height:85px;
  border:1px solid #dadada;
  border-radius: 10px;
  padding:5px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const StyledLink = styled(Link)`
  width: 110px;
  height: 70px;
  text-decoration:none;
  border-right:1px solid #dadada;
  &:last-child{
    border-right:none;
  }
`;

const IconBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const TrafficIcon = styled.img`
  width: 20px;
  height: 36px;
`;

const RouteIcon = styled.img`
  width: 35px;
  height: 36px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color:#000;
  text-decoration:none;
  margin:5px;
  text-align:center;
`;

const BookMarkBox = () => {
  return(
    <Container>
      <Title>즐겨찾기</Title>
      <BookMarkButton>
        <StyledLink to="/favorites_location">
          <IconBox>
            <IoLocationSharp color="#B4D491" size="38" stroke="#373838" strokeWidth="5px"/>
          </IconBox>
          <Text>장소</Text>
        </StyledLink>
        <StyledLink to="/favorites_traffic">
          <IconBox>
            <TrafficIcon src={trafficicon} alt="traffic icon" />
          </IconBox>
          <Text>신호등</Text>
        </StyledLink>
        <StyledLink to="/">
            <IconBox>
              <RouteIcon src={routeicon} alt="route icon" />
            </IconBox>
          <Text>경로</Text>
        </StyledLink>
      </BookMarkButton>
    </Container>
  );
}

export default BookMarkBox;
import styled from 'styled-components';
import { GoHome } from "react-icons/go"; // 흰색 홈
import { GoHomeFill } from "react-icons/go"; // 검정색 홈
import { PiTrafficSignal } from "react-icons/pi"; // 흰색 신호등
import { PiTrafficSignalFill } from "react-icons/pi"; // 검정색 신호등
import { GoStar } from "react-icons/go"; // 흰색 별
import { GoStarFill } from "react-icons/go"; // 검정색 별
import { HiOutlineUserCircle } from "react-icons/hi2"; // 흰색 마이페이지
import { HiUserCircle } from "react-icons/hi2"; // 검정색 마이페이지



import {Link} from 'react-router-dom';

const Container = styled.div`
  max-width: 390px;
  width: 100vh;
  height: calc(100vh - 56px);
  height: calc(100dvh - 56px); /* Mobile */
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 2px solid;
  text-align: middle;
  max-width: 390px;
  width: 100%;
  height: 56px;
  position: absolute;
  padding-top: 11px;
`;

const MenuBarLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
      <NavigationBar>
        <Link to = '/'><GoHome size="30"/></Link>
        <Link to = '/trafficlights'><PiTrafficSignal size="30"/></Link>
        <Link to = '/favorites'><GoStar size="30"/></Link>
        <Link to = '/mypage'><HiOutlineUserCircle size="30"/></Link>
      </NavigationBar>
    </>
  );
};

export default MenuBarLayout;
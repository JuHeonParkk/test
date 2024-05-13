import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const UserProfile = styled.div`
  width:100%;
  height: 100px;
  background-color: #F8F8FF;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const UserName = styled.span``;

const UserLevel = styled.div``;

const UserInfo = () => {
  return(
    <Container>
      <UserProfile>
        <UserName></UserName>
      </UserProfile>
      <UserLevel>

      </UserLevel>
    </Container>
  );
}

export default UserInfo;
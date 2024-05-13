import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import UpdateAlias from "./components/UpdateAlias";

const Container = styled.div``;

const UpdateBox = styled.div`
  width:100%;
  postion:relative;
`;

const CommitButton = styled.button`
  width:100%;
  height:40px;
  font-size:15px;
  font-weight:bold;
  color:#fff;
  text-align:center;
  background-color:#535CE8;
  border:none;
  border-radius:5px;
  position:absolute;
  bottom:30px;
`;

const UpdatePage = ({traffic}) => {
  return(
    <Layout>
      <Container>
        <Header>수정</Header>
        <UpdateBox>
          <UpdateAlias traffic={traffic}/>
          <CommitButton>완료</CommitButton>
        </UpdateBox>
      </Container>
    </Layout>
  );
}

export default UpdatePage;
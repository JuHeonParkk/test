import React from "react";
import styled from "styled-components";
import { MdStars } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

const Container = styled.div`
  width:100%;
  
  padding-top:24px;
  position:relative;
`;

const Inner = styled.div`
  width:100%;
  position:absolute;
  left:24px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  gap:12px;
`;


const Alias = styled.input`
  width:80%;
  height:40px;
  font-size:15px;
  border:none;
  border-bottom:1px solid #000;
`;

const DeleteBtn = styled.button`
  width:35px;
  height:100%;
  background-color:transparent;
  border:none;
  position:absolute;
  right:30px;
  display:none;
`;

const UpdateAlias = ({traffic}) => {
  return(
    <Container>
      <Inner>
        <MdStars color="#B4D491" size="32px"/>
        <Alias 
          type="text"
          placeholder={traffic}/>
        <DeleteBtn>
          <IoIosCloseCircle size="20px" color="#d9d9d9"/>
        </DeleteBtn>
      </Inner>
    </Container>
  );
}

export default UpdateAlias;
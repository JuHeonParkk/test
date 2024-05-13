import React from "react";
import styled from "styled-components";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosTrash } from "react-icons/io";

const EditBox = styled.div`
  width:100%;
  height:52px;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  flex-direction:row;
  box-sizing:border-box;
  position:absolute;
  top:0;
  right:0;
`;

const UpdateButton =  styled.button`
  width:55px;
  height:100%;
  background-color:#535CE8;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;
const DeleteButton = styled.button`
  width:55px;
  height:100%;
  background-color:#F44336;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;

const EditButton = () => {
  return(
    <EditBox>
      <UpdateButton>
        수정
      </UpdateButton>
      <DeleteButton>
        삭제
      </DeleteButton>
    </EditBox>

  );
}

export default EditButton;
import React, { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosTrash } from "react-icons/io";


const EditContainer = styled.div`
  height:52px;
  right:0px;
  display: grid;
  position:absolute;
`;

const UpdateBox = styled.button`
  width:50px;
  height:100%;
  border:none;
  color:#fff;
  font-size:11px;
  background-color:#535CE8;
  padding:0px;
  cusor:pointer;
  position:absolute;
  top:0;
  right:50px;
`;

const DeleteBox = styled.button`
  width:50px;
  height:100%;
  border:none;
  color:#fff;
  font-size:11px;
  background-color:#F44336;
  position:absolute;
  right:0px;
`;

const EditButton = ({ handleDeleteBtnClick }) => {
  const navigate = useNavigate();
  const handleEditBtnClick = () => {
    navigate("/updatepage");
  };

  return(
    <EditContainer>
      <UpdateBox onClick={handleEditBtnClick}>
        <BiSolidEditAlt color="#fff" size="18px"/>
      </UpdateBox>
      <DeleteBox onClick={handleDeleteBtnClick}>
        <IoIosTrash color="#fff" size="18px"/>
      </DeleteBox>
    </EditContainer>
  );
}

export default EditButton;
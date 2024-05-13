import React, { useEffect } from "react";
import styled from "styled-components";
import { MdStars } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";
import EditButton from "./EditButton";



const ListContainer = styled.div`
  width:100%;
  height:52px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid #d9d9d9;
  position:relative;
`;

const AliasBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
  position:absolute;
  left:24px;
`;

const Alias = styled.span`
  font-size:14px;
`;

const MoveBox = styled.div`
  background-color:#efefef;
  width:50px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  right:0px;
  cursor:grab;
`;


const BookMarkItem = ({ traffic, onDelete }) => {
  const { trafficId, trafficAlias} = traffic;

  
  return(
    <>
    <EditButton handleDeleteBtnClick={() => onDelete(trafficId)}/>
    <ListContainer>
      <AliasBox>
        <MdStars color="#B4D491" size="32px"/>
        <Alias>{trafficAlias}</Alias>
      </AliasBox>
      <MoveBox>
        <FaGripLines color="#666666"/>
      </MoveBox>
    </ListContainer>
    </>
  );
}

export default BookMarkItem;
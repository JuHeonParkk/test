import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavoritesLocationItems from "./FavoritesLocationItems";
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

const Container = styled.div`
  width:100%;
  height:calc(100% - 56px);

  .list_wrapper{
    width:100%;
    height:100%;
    position:relative;
    border-bottom:1px solid #f0f0f0;
  }

  .swipeList{
    width:100%;
    height:52px;
    position:relative;
    background-color:#fff;
  }
`;

const UpdateButton = styled.button`
  width:55px;
  height:52px;
  background-color:#535CE8;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;

const DeleteButton = styled.button`
  width:55px;
  height:52px;
  background-color:#F44336;
  border:none;
  color:#fff;
  font-size:11px;
  text-align:center;
  letter-spacing:-1px;
`;

const EditBox = styled.div`
  width:50%;
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

const FavoritesLocationList = ({ traffics, setTraffics }) => {
  const navigate = useNavigate();
  const handleUpdate =  () => {
    navigate(`/updatepage`);
  };

  const handleDeleteBtnClick = (trafficId) => {
    setTraffics(traffics.filter((traffic) => traffic.trafficId !== trafficId));
  };



  const trailingActions = () => ( 
      <TrailingActions>
        <EditBox>
        <SwipeAction
          onClick={handleUpdate}>
            <UpdateButton>수정</UpdateButton>
          </SwipeAction>
        <SwipeAction
          onClick={handleDeleteBtnClick}>
            <DeleteButton>삭제</DeleteButton>
          </SwipeAction>
          </EditBox>
      </TrailingActions>
    );
    
  return(
    <Container>
        <SwipeableList 
          className="list_wrapper">
          {traffics.map((traffic) => (
            <SwipeableListItem className="swipeList"
              trailingActions={trailingActions()}>
                    <FavoritesLocationItems 
                      key={traffic.trafficId}
                      traffic={traffic}
                    />
            </SwipeableListItem>
          ))}
        </SwipeableList>
      
    </Container>
  );    
};

  

export default FavoritesLocationList;
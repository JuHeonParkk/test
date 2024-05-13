import React from "react";
import styled from "styled-components";
import { MdStars } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";

const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  position:relative;
`;

const ItemBox = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:12px;
`;

const IconBox = styled.div`
  width:32px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const AliasBox = styled.div`
  width:calc(100% - 100px);
  height:100%;
  text-align:left;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;

const TrafficAlias = styled.span`
  font-size:15px;
`;

const MoveBox = styled.div`
  width:50px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const FavoritesTrafficItems = ({ traffic, swipeDragControls, reorderDragControls }) => {
  const { trafficId, trafficAlias} = traffic;

  return(
    <Container
      key={trafficId}
      dragControls={reorderDragControls}
      dragListener={false}
      >
      <ItemBox
        onPointerDown={(e)=>swipeDragControls.start(e)}
      >
        <IconBox>
          <MdStars color="#F25C5C" size="32px"/>
        </IconBox>
        <AliasBox>
          <TrafficAlias>{ trafficAlias }</TrafficAlias>
        </AliasBox>
      </ItemBox>
      <MoveBox>
        <FaGripLines color="#666666"/>
      </MoveBox>
    </Container>
  );
};

export default FavoritesTrafficItems;
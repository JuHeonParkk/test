import React,{ useEffect, useState } from "react";
import styled from "styled-components";
import EditButton from "./EditButton";
import FavoritesTrafficItems from "./FavoritesTrafficItems";
import { motion, useDragControls, useMotionValue } from "framer-motion";

const Container = styled.div`
  width:100%;
  height:calc(100% - 56px);
`;

const ListWrapper = styled.div`
  width:100%;
  height:52px;
  position:relative;
  border-bottom:1px solid #f0f0f0;
`;

const SwipeList = styled(motion.div)`
  width:100%;
  height:100%;
  position:relative;
  background-color:#fff;
`;


const FavoritesTrafficList = ({ traffics }) => {
  const swipeDragControls = useDragControls();
  const reorderDragControls = useDragControls();



//   const [isEdit, setIsEdit] = useState(false);
//   const editAnimateState = isEdit ? 'appear' : 'disappear';

  return(
    <Container>
      {traffics.map((traffic , index) => (
        <ListWrapper key={index}> {/* List div */}
          <EditButton /> 
          <SwipeList
            drag = "x"
            dragConstraints = {{ left:-110, right:0 }}
            dragControls = {swipeDragControls}
            dragElastic = {0.1}
            dragListener = {false}
            
          >
            <FavoritesTrafficItems 
              key={traffic.trafficId}
              traffic={traffic}
              swipeDragControls={swipeDragControls}
              reorderDragControls={reorderDragControls}
            />
          </SwipeList>
        </ListWrapper>
      ))
     }
    </Container>
  );    
};

export default FavoritesTrafficList;
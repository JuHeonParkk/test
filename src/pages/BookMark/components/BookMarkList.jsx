import React from "react";
import styled from "styled-components";
import BookMarkItem from "./BookMarkItem";


const Container = styled.div`
  width:100%;
  height: calc(100vh - 56px);
  position:relative;
`;

const BookMarkList = ({ traffics, onDelete }) => {

  return(
    <Container>
      {traffics.map((traffic) => (
        <BookMarkItem 
          key={traffic.trafficId}
          traffic={traffic}
          onDelete={onDelete}
         />
      ))}
    </Container>
  );
};

export default BookMarkList;
import React,{ useCallback, useState } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import EmptyPage from "./components/EmptyPage";
import BookMarkList from "./components/BookMarkList";



const BookMark = () => {
  const [traffics, setTraffics] = useState([
    {
      trafficId: 1,
      trafficAlias: "alias1",
    },
    {
      trafficId: 2,
      trafficAlias: "alias2",
    },
    {
      trafficId: 3,
      trafficAlias: "alias3",
    },
  ]);

  const handelDeleteBtnClick = useCallback(
    (trafficId) => {
      setTraffics(traffics.filter((traffic) => traffic.trafficId !== trafficId));
    },
    [traffics],
  );

  const empty = traffics.length === 0;

  return(
    <Layout>
      <Header>즐겨찾기 장소</Header> 
      {/* 배열이 비어있으면 <EmptyPage /> 
          ex_{empty ? <EmptyPage /> : <BookMarkList />} */}
      {empty ? 
      <EmptyPage /> : <BookMarkList traffics={traffics} onDelete={handelDeleteBtnClick}/> }
    </Layout>
  );
};

export default BookMark;
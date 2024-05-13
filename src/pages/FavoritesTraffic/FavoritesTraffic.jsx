import React,{ useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import EmptyPage from "./components/EmptyPage";
import FavoritesTrafficList from "./components/FavoritesTrafficList";

const FavoritesTraffic = () => {
  const traffics = [
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
  ];

  const EmptyList = traffics.length === 0;

  return(
    <Layout>
      <Header>즐겨찾기 신호등</Header>
      {EmptyList 
        ? <EmptyPage /> 
        : <FavoritesTrafficList traffics={traffics} />}
    </Layout>
  );
}

export default FavoritesTraffic;
import React,{ useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import LocationEmptyPage from "./components/LocationEmptyPage";
import FavoritesLocationList from "./components/FavoritesLocationList";

const FavoritesLocation = () => {
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

  const EmptyList = traffics.length === 0;

    
  return(
    <Layout>
      <Header>즐겨찾기 장소</Header>
      {EmptyList 
        ? <LocationEmptyPage /> 
        : <FavoritesLocationList traffics={traffics} />}
    </Layout>
  );
}

export default FavoritesLocation;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdatePage from "./pages/UpdatePage/UpdatePage";
import MyPage from "./pages/MyPage/MyPage";
import FavoritesTraffic from "./pages/FavoritesTraffic/FavoritesTraffic";
import FavoritesLocation from "./pages/FavoritesLocation/FavoritesLocation";
import KakaoRedirect from "./shared/KakaoRedirect";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favorites_location" element={<FavoritesLocation />}></Route>
        <Route path="/favorites_traffic" element={<FavoritesTraffic/>}></Route>
        <Route path="/updatepage" element={<UpdatePage/>}></Route>
        <Route path="/" element={<MyPage/>}></Route>
        <Route path="/oauth/kakao/callback" element={<KakaoRedirect/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import * as s from "src/Components/Home/Style/Main.style";
import Post from "src/Components/Home/Post/post";
import Head from "src/constants/head/Head/head";
import SideName from "src/Components/Home/SideName/sidename";
import Footer from "src/Components/Home/Footer/Fotter";
import MainCard from "src/Components/Home/Card/Maincard";
export default function Start() {
  return (
    <>
      <Head active={true} />
      <s.MainContainer>
        <s.MainHome>
          <MainCard />
          <s.BottomArea>
            <Post />
            <SideName />
          </s.BottomArea>
        </s.MainHome>
        <Footer />
      </s.MainContainer>
    </>
  );
}

import React from "react";
import * as S from "src/Components/Home/Style/Main.style";
import Post from "src/Components/Home/Post/post";
import Head from "src/Components/head/Head/head";
import SideName from "src/Components/Home/SideName/sidename";
import Footer from "src/Components/Home/Footer/Fotter";
import MainCard from "src/Components/Home/Card/Maincard";
export default function Start() {
  return (
    <S.Main>
      <Head active={true} />
      <S.MainContainer>
        <S.MainHome>
          <MainCard />
          <S.BottomArea>
            <Post />
            <SideName />
          </S.BottomArea>
        </S.MainHome>
        
      </S.MainContainer>
      <Footer />
    </S.Main>
  );
}

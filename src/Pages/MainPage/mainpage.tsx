import React from "react";
import * as S from "src/Components/common/Home/Style/Main.style";
import Post from "src/Components/common/Home/Post/post";
import Head from "src/Components/head/Head/head";
import SideName from "src/Components/common/Home/SideName/sidename";
import Footer from "src/Components/common/Home/Footer/Fotter";
import MainCard from "src/Components/common/Home/Card/Maincard";
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

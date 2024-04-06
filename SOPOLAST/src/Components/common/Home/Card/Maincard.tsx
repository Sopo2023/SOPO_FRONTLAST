import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Style/Main.style";
import useCard from "src/hooks/Main/Card/useCard"
const MainCard = ()=>{
  const navigate = useNavigate();
  const {
    scrollContainerRef,
    cards
  }=useCard()

 return(
    <S.MainCard ref={scrollContainerRef}>
            <S.CardContainer ref={scrollContainerRef}>
                {cards.slice(0, 6).map((cards)=>(
                    <S.Card key={cards.id} 
                  >
                    <S.CardP>
                      <S.p> {cards.name}</S.p>
                      <S.p>{cards.class}</S.p>
                      <S.p>{cards.belong}</S.p>
                      <S.p>{cards.clss}</S.p>
                    </S.CardP>
                  </S.Card>
                ))}
            </S.CardContainer>
          </S.MainCard>
 )
}
export default MainCard
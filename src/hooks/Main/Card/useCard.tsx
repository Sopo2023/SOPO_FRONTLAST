import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
const UseCard =()=>{
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [cards, setCards] = useState<any[]>([]);
    
    const accessToken = ""
    const MainCard = async()=>{
        try{
            const response = await axios.post(
                "#", 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            setCards(response.data); 
        }catch(error){

        }
        
    }
    const openMainCard = async(cardId)=>{
        try{
            const response = await axios.post("#",{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    cardId : cardId,
                }
            }
            );
            window.location.href = response.data.redirectTo;
        }catch(error){
            console.log(error);
            
        }
        fetchCardContent(cardId);
    }
    const fetchCardContent = async(cardId)=>{
        try{
            const response = await axios.get(`#`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    cardId : cardId,
                }
            })
            const CardContent = response.data;
        }   
        catch(error){
            console.log(error);
            
        }
    }
  
    const handleMouseDown = (e:MouseEvent) => {
      if (e.button !== 0) return; // 왼쪽 마우스 버튼만
      setDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleMouseMove = (e:MouseEvent) => {
      if (!dragging) return;
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
  
    useEffect(() => {
        MainCard()
      if (scrollContainerRef.current) {
        scrollContainerRef.current.addEventListener("mousedown", handleMouseDown);
        scrollContainerRef.current.addEventListener("mouseup", handleMouseUp);
        scrollContainerRef.current.addEventListener("mousemove", handleMouseMove);
      }
  
      return () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.removeEventListener(
            "mousedown",
            handleMouseDown
          );
          scrollContainerRef.current.removeEventListener(
            "mouseup",
            handleMouseUp
          );
          scrollContainerRef.current.removeEventListener(
            "mousemove",
            handleMouseMove
          );
        }
      };
    }, [scrollContainerRef, handleMouseDown, handleMouseUp, handleMouseMove]);

    return{
        scrollContainerRef,
        cards,
    }
}
export default UseCard
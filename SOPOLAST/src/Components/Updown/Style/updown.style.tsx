import styled from "styled-components";

export const Main = styled.div`
    width: 1500px;
    height: 1500px;
`;
export const Content = styled.div`
    width: 1500px;
    height: 1500px;
`;
export const Search1 = styled.div`
    position: absolute;
    top: 8%;
    left: 580px;
    width: 840px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid #1A9A18;
    background: #FFF;
    z-index: 2;
`;
export const Search_box = styled.div`
    position: absolute;
    outline: none;
    font-size: 20px;
    left: 20px;
    top: 5px;
    border: none;
    width: 750px;
    height: 40px;
    display: flex;
`;
export const Search_icon = styled.div`
    position: absolute;
    cursor: pointer;
    background-color: #FFF;
    top: 9px;
    left: 790px;
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    border: 1px solid #1A9A18;
    border-radius: 50%;
`;
export const Searcg_icon_line = styled.div`
    position: absolute;
    cursor: pointer;
    top: 35px;
    left: 809px;
    background-color: #1A9A18;
    transform: rotate( 50deg );
    width: 13px;
    height: 1px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #1A9A18;
`;
export const Post_container = styled.div`
    position: absolute;
    left: 500px;
    top: 200px;
    overflow-y: auto; 
    max-height: calc(100% - 190px); 
    width: 1200px;
    height: 1040px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const Post_written = styled.div`
    position: relative;
    border-bottom: 1px solid #888;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 40px;
    background-color: #fff;
    width: 1000px;
    height: 180px;
    cursor: pointer;
    z-index: 1;
    &.Name {
        font-weight: bold;
        font-size: 20px;
        color: #333;
    }
    &.Title {
        font-size: 22px;
        color: #777;
    }
    &.Detail {
        color: #777;
    }
    &.Date {
        color: #888;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
export const Post_border = styled.div`
    width: 650px;
    height: 260px;
`;
export const Postshow1 = styled.div`
    width: 650px;
    margin-left: -10px;
`;
export const Name = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 20px;  
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;
export const Title = styled.div`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 6px;
`;
export const Detail = styled.div`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const Post_Img = styled.div`
    width: 240px;
    height: 200px;
    position: absolute;
    top: 50%; 
    right: 50px; 
    transform: translate(0, -55%); 
`;
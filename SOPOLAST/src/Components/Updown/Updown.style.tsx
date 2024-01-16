import styled from "styled-components";

export const Main = styled.div`
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
    margin-top: 30px;
`;
export const Search_box = styled.input`
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
export const Search_icon = styled.input`
    type="button"
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
    margin-left: 790px;
    margin-top: 6px;
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
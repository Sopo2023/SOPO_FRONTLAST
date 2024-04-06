import styled from "styled-components";

export const Search1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid #1A9A18;
    background: #FFF;
`;
export const Search_box = styled.input`
    margin-left: 20px;
    display: flex;
    outline: none;
    font-size: 20px;
    border: none;
    width: 90%;
    height: 90%;
    display: flex;
`;
export const Search_icon = styled.button`
    cursor: pointer;
    outline: none;
    background-color: #FFF;
    width: 25px;
    height: 25px;
    border: 1px solid #1A9A18;
    border-radius: 50%;
`;
export const Searcg_icon_line = styled.div`
    cursor: pointer;
    margin-top: 3px;
    margin-left: 15px;
    background-color: #1A9A18;
    transform: rotate( 55deg );
    width: 13px;
    height: 1px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #1A9A18;
`;
export const SearcTool =styled.button`
    display: flex;
    margin-top: 15px;
    flex-direction: column;
    width: 35px;
    height: 100%;
    border: none;
    background: none;
`
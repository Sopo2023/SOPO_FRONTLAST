import styled from "styled-components";

export const Header = styled.div`
position: fixed !important;
position: absolute;
top: 0;
z-index: 3;
background-color: #ffffff;
color: #1A9A18;
width: 100%; 
height: 80px;
margin: 0;
display: flex;
align-items: center;
`
export const SopoLogo= styled.h1`
text-decoration: none; /* 밑줄 제거 */
color: #1A9A18; 
margin: 0 40px 0 30px;
cursor: pointer;
font-size: 25px;
font-weight: 600;
`
export const HeaderUl = styled.ul`
padding: 0;
display: flex;
justify-content: space-between;
`
export const HeaderLi = styled.nav`
cursor: pointer; 
text-decoration-line: none;
font-size: 23px;
font-weight: 800;
color: #8C8C8C;
text-decoration: none;
display: inline-block;
margin-right: 50px;
list-style-type: none;
justify-content: space-between;
display: flex; 
& :hover{
    color: #1A9A18 !important;
}

`
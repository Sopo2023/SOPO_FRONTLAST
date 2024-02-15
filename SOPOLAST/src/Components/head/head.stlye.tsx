import styled,{css} from "styled-components";

interface HeaderLiProps {
    active: boolean;
  }
export const Head = styled.div`
    width: 1400px;
    height: 100%;
    display: flex;
    align-items: center;
`
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
justify-content: center;
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
export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
export const HeaderUl = styled.ul`
padding: 0;
display: flex;
justify-content: space-between;
`
export const HeaderLi = styled.div<HeaderLiProps>`
  cursor: pointer;
  height: 100%;
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

  ${({ active }) =>
    active &&
    css`
      color: #1A9A18 !important;
      text-decoration: underline !important;
      text-underline-offset: 32px !important;
    `}
span{
  text-decoration: none;
  font-size: 23px;
    color: #8C8C8C;
    padding: 0px 7px;
    box-sizing: content-box;
    white-space: nowrap;
    cursor: pointer;
}
  &:hover {
    color: #1A9A18 !important;
  }
`;
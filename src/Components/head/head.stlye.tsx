import styled, { css } from "styled-components";
import {HeaderLiProps} from "src/types/Head/Head.types"

export const Head = styled.div`
  @media only screen and (min-width: 320px) {
    width: 320px;
  }
  @media only screen and (max-width: 540px) {
    width: 540px;
  }
  @media only screen and (max-width: 1023px) {
    width: 1023px;
  }
  @media only screen and (min-width: 1024px) {
    width: 1024px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1300px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1500px;
  }
  @media only screen and (min-width: 1470px) {
    width: 1470px;
  }
  @media only screen and (min-width: 1600px) {
    width: 1700px;
  }
  @media only screen and (min-width: 1700px) {
    width: 1800px;
  }
  @media only screen and (min-width: 1920px) {
    width: 2000px;
  }
  @media only screen and (min-width: 2000px) {
    width: 2100px;
  }
  @media only screen and (min-width: 2400px) {
    width: 2600px;
  }
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Header = styled.div`
  position: fixed !important;
  position: absolute;
  top: 0;
  z-index: 3;
  background-color: #ffffff;
  color: #1a9a18;
  width: 100%;
  height: 80px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SopoLogo = styled.h1`
  text-decoration: none; /* 밑줄 제거 */
  color: #1a9a18;
  margin: 0 40px 0 30px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
`;
export const Nav = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const HeaderUl = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
export const HeaderLi = styled.div<HeaderLiProps>`
  cursor: pointer;
  height: 100%;
  text-decoration-line: none;
  font-size: 23px;
  font-weight: 800;
  color: #8c8c8c;
  text-decoration: none;
  display: inline-block;
  margin-right: 50px;
  list-style-type: none;
  justify-content: space-between;
  display: flex;
 
  
  span {
    text-decoration: none;
    font-size: 23px;
    color: #8c8c8c;
    padding: 0px 7px;
    box-sizing: content-box;
    white-space: nowrap;
    cursor: pointer;
    ${({ active }) =>
    active &&
    css`
      color: #1a9a18 !important;
      text-decoration: underline !important;
      text-underline-offset: 32px !important;
    `}
    &:hover {
    color: #1a9a18 !important;
  }
  }



`;

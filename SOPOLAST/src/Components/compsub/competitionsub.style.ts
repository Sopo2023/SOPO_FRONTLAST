import styled from "styled-components";

export const AllCompContain = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    margin-top: 80px;
    display: flex;
    position: relative;
`
export const Main = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;

`
export const CompBox1 = styled.div`
    width: 829px;
    height: 669px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    position: relative;
    margin-top: 30px;
    margin-left: 20px;
    display: inline-block;
`

export const CompBack1 = styled.div`
 position: relative;
  
  margin-top: 0;
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
`

export const CompTitle1 = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-top: 44px;
    margin-left: 56px;
`

export const CompGrade1 = styled.p`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  
    margin-top: 13px;
    margin-left: 56px;
`

export const CompAbout1 = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  
    margin-top: 52px;
    margin-left: 56px;
`

export const MailComp = styled.a`
    text-decoration: none;
    color: #000;
`
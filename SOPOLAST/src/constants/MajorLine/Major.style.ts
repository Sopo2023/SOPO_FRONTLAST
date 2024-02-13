import styled from "styled-components"

export const StackLine = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0px;
    left: 200px;
    display: inline-block;
`

export const GradeSelect = styled.select`
    width: 80px;
    height: 40px;
    color: #000;
    border: none; 
    font-size: 30px;
    font-weight: 600;
    font-family: Inter;
    margin-top: 20px;
    display: inline;
`

export const GradeGreen = styled.div`
    color: green;
    font-size: 30px;
    position: relative;
    display: inline;
`

export const MajorSelect = styled.div`
    display: inline;
    color: #A7A7A7;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: relative;
    
`


export const MajorButton = styled.button`
    border: none;
    background-color: none;
    padding: 13px;
    display: inline;
    color: #A7A7A7;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: relative;
    background: none;
    cursor: pointer;
`

export const MajorButtonHover = styled(MajorButton)`
    &:hover {
        color: #1A9A18 !important;
    }
`

export const MajorButtonClicked = styled(MajorButton)`
    &:active {
        color: #1A9A18 !important;
    }
`
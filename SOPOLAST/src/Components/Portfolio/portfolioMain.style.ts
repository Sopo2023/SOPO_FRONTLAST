import styled from "styled-components"

export const SearchBox = styled.div`
    display: flex;
    position: absolute;
    left: 300px;
    top: 100px;
    width: 840px;
    height: 150px;
    flex-shrink: 0; 
`

export const Search = styled.div`
    position: absolute;
    display: inline-block;
    top: 10px;
    left: 180px;
    width: 840px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid #1A9A18;
    background: #FFF;
`

export const Searchbox = styled.input`
    position: relative;
    outline: none;
    font-size: 20px;
    left: 20px;
    top: 4px;
    border: none;
    width: 750px;
    height: 40px;
`

export const SearchIcon = styled.input`
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
`

export const serchIconLine = styled.div`
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
`
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

export const Mo = styled.div`
    position: absolute;
    left: 460px;
    top: 200px;
    width: 900px;
    height: 1000px;
`

export const NameCardBox = styled.div`
    width: 840px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 22px;
    margin-top: 30px;
    display: inline-block;
`;

export const HoveredNameCardBox = styled(NameCardBox)`
  &:hover {
    cursor: pointer;
  }
`;

export const CardName = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    position: absolute;
    margin-top: 22px;
    margin-left: 33px;
`

export const CardGrade = styled.div`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    margin-top: 55px;
    margin-left: 33px;
`

export const CardMail = styled.div`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    margin-top: 99px;
    margin-left: 33px;
`

export const NameCardBox2 = styled.div`
    width: 840px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 22px;
    margin-top: 180px;
    cursor: pointer;
    display: inline-block;
`;

export const NameCardBox3 = styled.div`
    width: 840px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 22px;
    margin-top: 330px;
    display: inline-block;
`;

export const NameCardBox4 = styled.div`
    width: 840px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 22px;
    margin-top: 480px;
    display: inline-block;
`;

export const NameCardBox5 = styled.div`
    width: 840px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-left: 22px;
    margin-top: 640px;
    display: inline-block;
`


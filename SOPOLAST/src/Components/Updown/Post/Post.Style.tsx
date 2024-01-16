import styled from "styled-components";

export const PostMain = styled.div`
    width: 890px;
    margin-top: -700px;
    margin-left: 580px;
`;
export const Post_border = styled.div`
    width: 550px;
    height: 260px;
`;
export const Name = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 20px;  
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;
export const Title = styled.span`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 6px;
`;
export const Detail = styled.span`
    color: #8C8C8C;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const Date = styled.span`
    color: #888;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 160px; 
    margin-left: 10px;
`
export const Img = styled.span`
    display: flex;
    align-items: center;
    width: 400px;
    height: 250px;
    left: 60%;
    bottom: 70px;
    img {
    width: 250px;
    height: 150px;
    object-fit: contain;
    margin-left: 650px;
    margin-top: -320px;
    position: absolute;
    }
`
export const Post_Written = styled.div`
    width: 900px;
    height: 180px;
    border-bottom: 1px solid #888;
    margin-top: -30px;
    position: relative;
`
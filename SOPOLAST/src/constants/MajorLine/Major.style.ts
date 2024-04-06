import styled, { css } from "styled-components";
interface HeaderLiProps {
  active: boolean;
}

export const StackLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0px;
  left: 200px;
  display: inline-block;
`;

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
`;

export const GradeGreen = styled.div`
  color: green;
  font-size: 30px;
  position: relative;
  display: inline;
`;

export const MajorSelect = styled.div`
  display: inline;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
`;

export const MajorButton = styled.button<HeaderLiProps>`
  border: none;
  background-color: none;
  color: #A7A7A7;
  padding: 13px;
  display: inline;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  background: none;
  cursor: pointer;

  &:hover {
    color: #1a9a18;
  }
  ${(props) =>
    props.active &&
    css`
      color: #1a9a18;
    `}
`;

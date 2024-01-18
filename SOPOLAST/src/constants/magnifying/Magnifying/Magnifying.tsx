import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "src/constants/magnifying/Magnifying.Style";

export default function Magnifying() {
    return (
        <s.Search1>
          <s.Search_box></s.Search_box>
          <s.SearcTool>
          <s.Search_icon></s.Search_icon>
          <s.Searcg_icon_line></s.Searcg_icon_line>
          </s.SearcTool>
        </s.Search1>
    )
}
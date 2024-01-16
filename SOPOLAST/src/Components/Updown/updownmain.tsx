import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidename from "src/constants/Sidebar/Side/side";
import Head from "src/constants/head/Head/head";
import UpdownPost from "src/Components/Updown/Post/Post";
import * as s from "src/Components/Updown/Updown.style";

export default function Updown() {
  const navigate = useNavigate();
  return (
    <s.Main>
        <Head active={true} />
        <Sidename />
        <s.Search1>
          <s.Search_box></s.Search_box>
          <s.Search_icon></s.Search_icon>
          <s.Searcg_icon_line></s.Searcg_icon_line>
        </s.Search1>
        <UpdownPost/>
    </s.Main>
  );
}

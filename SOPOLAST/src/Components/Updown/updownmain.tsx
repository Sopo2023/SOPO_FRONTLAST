import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidename from "src/constants/Sidebar/Side/side";
import Head from "src/constants/head/Head/head";
import UpdownPost from "src/Components/Updown/Post/Post";
import Magnifying from "src/constants/magnifying/Magnifying/Magnifying";
import * as s from "src/Components/Updown/Updown.style";

export default function Updown() {
  const navigate = useNavigate();
  return (
    <s.Main>
        <Head active={true} />
        <Sidename />
        <Magnifying />
        <UpdownPost/>
    </s.Main>
  );
}

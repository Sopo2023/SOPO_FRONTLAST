import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidename from "src/Components/Sidebar/Side/side";
import Head from "src/Components/head/Head/head";
import UpdownPost from "src/Components/Updown/Post/Post";

import * as S from "src/Components/Updown/Updown.style";

export default function Updown() {
  const navigate = useNavigate();
  return (
    <S.Main>
      <Head active={true} />
      <Sidename />
      <UpdownPost />
    </S.Main>
  );
}

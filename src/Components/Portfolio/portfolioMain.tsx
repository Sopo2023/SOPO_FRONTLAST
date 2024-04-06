import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidename from "src/Components/Sidebar/Side/side";
import Head from "src/Components/head/Head/head"
import MajorLine from "../../constants/MajorLine/Major"
import axios from "axios";

import * as S from "./portfolioMain.style";

export default function Portfolio() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("히ㅣㅎ api");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleNameCardClick = (user) => {
    setActiveUser(user);
  };

  return (
    <div className="main">
      <div className="content">
        <Head active={true} />

        <S.SearchBox>
          <S.Search>
            <S.Searchbox />
            <S.SearchIcon type="button" />
            <S.serchIconLine />
          </S.Search>
          <MajorLine/>
        </S.SearchBox>

        <Sidename />
        <S.Mo>
          {users.map((user) => (
            <S.NameCardBox
              key={user.id}
              className="namecardBox"
              onClick={() => handleNameCardClick(user)}
            >
              <S.CardName>{user.name}</S.CardName>
              <S.CardGrade>{user.grade}</S.CardGrade>
              <S.CardMail>{user.mail}</S.CardMail>
            </S.NameCardBox>
          ))}
        </S.Mo>
      </div>
    </div>
  );
}

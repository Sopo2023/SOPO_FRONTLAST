import React, { useState, useEffect } from "react";
import axios from "axios";
const UseSidebar = () => {
  const [sideName, setSideName] = useState<string>("");
  const [Email, setSideEamil] = useState<string>("");
  const [skill, setskill] = useState<string[]>([]);
  const [award, setaward] = useState<string[]>([]);
  const [club, setclub] = useState<string>("");
  const [github, setgithub] = useState<string>("");
  const [introduction, setintroduction] = useState<string>("");
  const [Bio, setBio] =  useState<string>("");
  const [number, setNumber] =  useState<string>("");
  const Sidbar = async () => {
    try {
      const response = await axios.get("#", {
        headers: { Authorization: "" },
      });
      if (response.status === 200) {
        console.log("성공");
        setSideName(response.data.name);
        setintroduction(response.data.introduction);
        setSideEamil(response.data.email);
        setskill(response.data.skill);
        setaward(response.data.award);
        setclub(response.data.club);
        setgithub(response.data.github);
        setBio(response.data.Bio);
        setNumber(response.data.number);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Sidbar();
  }, []);
  return {
    sideName,
    introduction,
    Bio,
    Email,
    skill,
    award,
    club,
    github,
    number,
  };
};
export default UseSidebar;

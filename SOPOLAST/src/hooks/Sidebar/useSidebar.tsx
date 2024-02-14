import React, { useState, useEffect } from "react";
import axios from "axios";
const UseSidebar = () => {
  const [sideName, setSideName] = useState<string>("");
  const [Email, setSideEamil] = useState<string>("");
  const [skill, setskill] = useState<string[]>([]);
  const [award, setaward] = useState<string[]>([]);
  const [club, setclub] = useState<string>("");
  const [github, setgithub] = useState<string>("");

  const Sidbar = async () => {
    try {
      const response = await axios.get("#", {
        headers: { Authorization: "" },
      });
      if (response.status === 200) {
        console.log("성공");
        setSideName(response.data.name);
        setSideEamil(response.data.email);
        setskill(response.data.skill);
        setaward(response.data.award);
        setclub(response.data.club);
        setgithub(response.data.github);
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
    Email,
    skill,
    award,
    club,
    github,
  };
};
export default UseSidebar;

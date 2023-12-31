import React from "react";
import "./App.css";
import Updown from "./Components/Updown/updownmain";
import Login from "./Components/Login/login";
import Portfolio from "./Components/Portfolio/portfolioMain";
import Main from "./Components/Main/MainPage/mainpage";
import Write from "./Components/Sidewrite/write";
import Signup from "./Components/Signup/signup";
import Mypage from "./Components/Mypage/mypage";
import Competition from "./Components/Competition/Competition";
import Portfoliosub from "./Components/Portfoliosub/portfolioSub";
import Updownsub from "./Components/Updownsub/postshow";
import CompetitionSub from "./Components/compsub/competitionsub";
import Park from "./Components/park";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Mentor-Mentee" element={<Updown />} />
            <Route path="/sidewrite" element={<Write />} />
            <Route path="/Signuppage" element={<Signup />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/52562893" element={<Portfoliosub />} />
            <Route path="/Updownsub" element={<Updownsub />} />
            <Route path="/CompetitionSub" element={<CompetitionSub />} />
            <Route path="/12362153" element={<Park />} />
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

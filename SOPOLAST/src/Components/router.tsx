import React from "react";
import GlobalStyles from "src/Style/global";
import Updown from "src/Components/Updown/updownmain";
import Login from "src/Components/Auth/Login/login";
import Portfolio from "src/Components/Portfolio/portfolioMain";
import Main from "src/Pages/MainPage/mainpage";
import Write from "src/Components/Sidewrite/write";
import Signup from "src/Components/Auth/Signup/signup";
import Mypage from "src/Components/Mypage/mypage";
import Competition from "src/Components/Competition/Competition";
import Portfoliosub from "src/Components/Portfoliosub/portfolioSub";
import Updownsub from "src/Components/Updownsub/postshow";
import CompetitionSub from "src/Components/compsub/competitionsub";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Router=()=> {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
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
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default Router;

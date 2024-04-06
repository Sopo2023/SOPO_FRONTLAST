import GlobalStyles from "src/Style/global";
import Updown from "src/Components/common/Updown/updownmain";
import Login from "src/Components/common/Auth/Login/login";
import Portfolio from "src/Components/common/Portfolio/portfolioMain";
import Main from "src/Pages/MainPage/mainpage";
import Write from "src/Components/common/Sidewrite/write";
import Signup from "src/Components/common/Auth/Signup/signup";
import Mypage from "src/Components/common/Mypage/mypage";
import Competition from "src/Components/common/Competition/Competition";
import Portfoliosub from "src/Components/common/Portfoliosub/portfolioSub";
import Updownsub from "src/Components/common/Updownsub/postshow";
import CompetitionSub from "src/Components/common/compsub/competitionsub";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
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
};

export default Router;

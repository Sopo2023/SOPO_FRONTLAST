import "./App.css";
import Updown from "./Components/Updown/updownmain";
import LoginComponent from "./Components/Login/login";
import Portfolio from "./Components/Portfolio/portfolioMain";
import Main from "../src/Components/Main/mainpage";
import Write from "../src/Components/Sidewrite/write";
import Signup from "../src/Components/Signup/signup";
import Mypage from "../src/Components/Mypage/mypage";
import Competition from "../src/Components/Competition/Competition";
import Portfoliosub from "../src/Components/Portfoliosub/portfolioSub";
import Mypagesub from "../src/Components/Mypagesub/mypageadjustment";
import Updownsub from "../src/Components/Updownsub/postshow";
import CompetitionSub from "../src/Components/compsub/competitionsub";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot> {/* RecoilRoot를 App 컴포넌트 내부에 두세요 */}
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/main" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Mentor-Mentee" element={<Updown />} />
            <Route path="/sidewrite" element={<Write />} />
            <Route path="/Signuppage" element={<Signup />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/Portfoliosub" element={<Portfoliosub />} />
            <Route path="/Mypagesub" element={<Mypagesub />} />
            <Route path="/Updownsub" element={<Updownsub />} />
            <Route path="/CompetitionSub" element={<CompetitionSub />} />
          </Routes>
        </div>
      </RecoilRoot> {/* RecoilRoot를 App 컴포넌트 내부에 두세요 */}
    </BrowserRouter>
  );
}

export default App;

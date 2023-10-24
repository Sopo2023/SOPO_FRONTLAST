import './App.css';
import Updown from './Components/Updown/updownmain';
import LoginComponent from './Components/Login/login';
import Portfolio from "./Components/Portfolio/portfolioMain"
import Main from "../src/Components/Main/mainpage"
import Write from '../src/Components/Sidewrite/write'
import Signup from '../src/Components/Signup/signup'
import Mypage from '../src/Components/Mypage/mypage'
import Competition from '../src/Components/Competition/Competition';
import Portfoliosub from "../src/Components/Portfoliosub/portfolioSub"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route path='/main' element={<Main />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/Mentor-Mentee' element={<Updown />}/>
          <Route path='/sidewrite' element={<Write />} />
          <Route path='/Signuppage' element={<Signup />}/>
          <Route path='/Mypage' element={<Mypage/>}/>
          <Route path='/Competition' element={<Competition/>}/>
          <Route path='/Portfoliosub' element={<Portfoliosub/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

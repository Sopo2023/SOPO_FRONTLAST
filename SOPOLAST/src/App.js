import './App.css';
import Updown from './updowncomponent/updownmain';
import Login from './logincomponent/login';
import Portfolio from './portfoliocomponent/portfolioMain';
import Start from './maincmt/mainpage'
import Write from './sidewrite/write'
import Signup from './signupcomponent/signup'
import Mypage from './mypagecompoent/mypage'
import Competition from './Competitioncomponent/Competition';
import Sub from "./portfoliosub/portfolioSub"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<Start />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/Mentor-Mentee' element={<Updown />}/>
          <Route path='/main/sidewrite' element={<Write />} />
          <Route path='/Signuppage' element={<Signup />}/>
          <Route path='/Mypage' element={<Mypage/>}/>
          <Route path='/Competition' element={<Competition/>}/>
          <Route path='/sub' element={<Sub/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

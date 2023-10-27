import { useNavigate } from "react-router-dom";
import "./head.css"

export default function Head(){
    const navigate = useNavigate(); 
    return(
        <header className="header">
             <h1 className='SOPO' onClick={()=>{navigate("/main")}}>SOPO</h1>
             <nav className="nav">
                 <ul>
                    <li className='link' onClick={()=>navigate("/main")}> 홈</li>
                     <li className='link' onClick={()=>navigate("/Mentor-Mentee")}>선배가 후배에게</li>
                     <li className='link' onClick={()=>navigate("/portfolio")}>포트폴리오</li>
                     <li className='link' onClick={()=>navigate("/Competition")}>대회</li>
                     <li className='link' onClick={()=>navigate("/mypage")}>내정보</li>
                 </ul>
             </nav>
         </header> 
    )
}
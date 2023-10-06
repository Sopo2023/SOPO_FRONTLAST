import { Link } from 'react-router-dom';

export default function sidewrite(){
    return(
        <div className="content">
            <header className="header">
             <h1><Link to="/main" className='SOPO' >SOPO</Link></h1>
             <nav className="nav">
                 <ul>
                     <li><Link to="/Mentor-Mentee" className="link">선배가 후배에게</Link></li>
                     <li><Link to="/portfolio" className="link">포트폴리오</Link></li>
                     <li><Link to="/Competition" className="link">대회</Link></li>
                     <li><Link to="/mypage" className="link">내정보</Link></li>
                 </ul>
             </nav>
         </header>
         <form className='wirte_done'>
            <input id='write_submit' type='submit'></input>
            <input className='write_title' type='text' placeholder='제목'></input>
            <input className='write_screen' type='textarea' placeholder='내용'>
            </input>
            
         </form>
        </div>
    )
}
import { Link } from 'react-router-dom';
import Head from '../../head/head';
import Side from '../Sidebar/side';

export default function Sidewrite(){
    return(
        <div className='main'>
            <div className="content">
                <Head />
                <Side />
            <form className='wirte_done'>
                <input id='write_submit' type='submit'></input>
                <input className='write_title' type='text' placeholder='제목'></input>
                <input className='write_screen' type='textarea' placeholder='내용'>
                </input>
                
            </form>
            </div>
        </div>
    )
}
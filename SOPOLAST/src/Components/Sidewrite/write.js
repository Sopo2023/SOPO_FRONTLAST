import { useState } from 'react';
import axios from 'axios';
import Head from '../../head/head';
import Side from '../Sidebar/side';

export default function Sidewrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const SERVERURL = "#"; 

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SERVERURL, {
        title,
        content,
      });

      console.log("Post request response: ", response.data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='main'>
      <div className="content">
        <Head />
        <Side />
        <form className='write_form' onSubmit={onSubmitHandler}>
          <input
            className='write_title'
            type='text'
            placeholder='제목'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className='write_screen'
            placeholder='내용'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button id='write_submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

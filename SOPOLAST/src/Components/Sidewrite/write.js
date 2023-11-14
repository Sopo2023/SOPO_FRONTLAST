import { useState } from 'react';
import axios from 'axios';
import Head from '../../hooks/head/head';
import Side from '../Sidebar/side';
import "./write.css";
import Swal from "sweetalert2";

export default function Sidewrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null); 
  const localStorageEmail = localStorage.getItem('sopo_id');
  const SERVERURL =`${process.env.REACT_APP_SERVER_URL}`;
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const selectedCategory = document.querySelector('.sc-cBornz-gegs').value;
    const selectedPlace = document.querySelector('.sd-cBornz-gegs').value;
  
    if (!title || !content) {
      Toast.fire({
        icon: 'error',
        title: '제목, 내용을 모두 입력해주세요.',
      });
      return;
    }
    
  
    const formData = new FormData();
    const data = {
      title,
      content,
      email: localStorageEmail,
    };
  
    
    formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
  
    if (selectedPlace === "게시물") {
      formData.append("image", selectedImage);
    }
  
    try {
      let response;
      if (selectedPlace === "게시물") {
        await axios.post(`${SERVERURL}/senior-to-junior/create`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else if (selectedPlace === "대회") {
        response = await axios.post(SERVERURL + "#", formData, {
          headers: {
            
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setSelectedImage(selectedImage);
    setFileName(selectedImage ? selectedImage.name : null);
    setImageSrc(URL.createObjectURL(selectedImage));
  };

  return (
    <div className='main'>
      <div className="content">
        <Head />
        <Side />
        <form className='write_form' onSubmit={onSubmitHandler}>

          <div className='write_img1'>
            
            {imageSrc && <img src={imageSrc} alt="Preview" />}
          </div>
          <div className='sc-cBornZ-gegSAw'>
            <span>카테고리</span>
            <select className='sc-cBornz-gegs'>
              <option value="웹">웹</option>
              <option value="서버">서버</option>
              <option value="안드">안드로이드</option>
              <option value="iOS">iOS</option>
              <option value="임베">임베디드</option>
              <option value="디자인">디자인</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <div className='sd-cBornZ-gegSAw'>
            <span>올릴곳</span>
            <select className='sd-cBornz-gegs'>
              <option value="게시물">게시물</option>
              <option value="대회">대회</option>
            </select>
          </div>
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
          <label htmlFor="file">
            <div className="btn-upload">사진 설정</div>
          </label>
          <input type="file" name="file" id="file" onChange={handleImageChange} />
          {/* {fileName && <div>{fileName}</div>} */}
          <button id='write_submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

import { useState } from 'react';
import axios from 'axios';
import Head from '../../head/head';
import Side from '../Sidebar/side';
import "./write.css";
import Swal from "sweetalert2";

export default function Sidewrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Define selectedImage
  const SERVERURL = "#"; 

  const onSubmitHandler = async (e) => {
    
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", selectedImage);

    try {
      const response = await axios.post(SERVERURL, formData, {
        headers: {
          "": "", 
        },
      });

      console.log("Post request response: ", response.data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setSelectedImage(selectedImage); // Update selectedImage
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
          <input type="file" name="file" id="file" onChange={handleImageChange}/>
          <button id='write_submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

import { useState, ChangeEvent, FormEvent } from "react";
import { showToast } from "src/constants/Swal/Swal";
import axios from "axios";
const UseSidewrite = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [selectPlace, setselectPlace] = useState<string>("");
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [Class, setSelectClass] = useState<string>("");
    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files?.[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setSelectedImg(reader.result as string);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    
  
    const onSubmitHandler = async (e: FormEvent) => {
      console.log("hello");
  
      e.preventDefault();
  
      if (!title || !content) {
        showToast("error", "제목, 내용을 모두 입력해주세요.");
        return;
      }
  
      const formData = new FormData();
      const data = {
        title,
        content,
        
      };
      formData.append(
        "data",
        new Blob([JSON.stringify(data)], { type: "application/json" })
      );
      
      if (selectPlace === "게시물" && selectedImg) {
        formData.append("image", selectedImg);
      }
  
      try {
        let response;
        if (selectPlace === "게시물") {
          await axios.post(`#`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } else if (selectPlace === "대회") {
          response = await axios.post("#", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
return{
    title,
    setTitle,
    content,
    setContent,
    selectPlace,
    setselectPlace,
    Class,
    setSelectClass,
    selectedImg,
    handleChangeImg,
    onSubmitHandler,
}
}
export default UseSidewrite

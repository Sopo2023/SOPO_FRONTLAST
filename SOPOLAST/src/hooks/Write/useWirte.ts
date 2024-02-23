import { useState, ChangeEvent, FormEvent } from "react";
import { showToast } from "src/constants/Swal/Swal";
import axios from "axios";

const UseSidewrite = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectPlace, setselectPlace] = useState<string>("");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [Class, setSelectClass] = useState<string>("");

  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>): void => {
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
    e.preventDefault();

    if (!title || !content) {
      showToast("error", "제목과 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    const data = {
      title,
      content,
      setselectPlace,
      setSelectClass,
      selectedImg,
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
        response = await axios.post("#", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      // 서버 응답 처리
      console.log(response);

      // 콘솔에 정보가 나오도록 추가
      console.log("서버로 정보를 보냈습니다.");
      console.log("보낸 데이터:", data);
      console.log("선택한 카테고리:", setSelectClass); // 선택한 카테고리를 콘솔에 출력
    } catch (error) {
      console.error("Error:", error);
    }

    if (selectPlace === "게시물" && selectedImg) {
      formData.append("image", selectedImg);
    }

    try {
      let response;
      if (selectPlace === "게시물") {
        response = await axios.post("#", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      console.log(response);

      // 콘솔에 정보가 나오도록 추가
      console.log("서버로 정보를 보냈습니다.");
      console.log("보낸 데이터:", data);
      console.log("선택한 카테고리:", setSelectClass); // 선택한 카테고리를 콘솔에 출력
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
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
  };
};

export default UseSidewrite;

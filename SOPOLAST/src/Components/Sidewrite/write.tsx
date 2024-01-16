import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Head from "../../constants/head/Head/head";
import Side from "../../constants/Sidebar/Side/side";
import ImgPlus from "src/Assets/image/imgplus.png";
import SubmitImg from "src/Assets/image/submitimg.png";
import * as s from "./Write.style";
import { showToast } from "src/constants/Swal/Swal";


const Sidewrite = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const localStorageEmail = localStorage.getItem("sopo_id");
  const SERVERURL = `${process.env.REACT_APP_SERVER_URL}`;

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const selectedCategory = (
      document.querySelector(".sc-cBornz-gegs") as HTMLSelectElement
    ).value;
    const selectedPlace = (
      document.querySelector(".sd-cBornz-gegs") as HTMLSelectElement
    ).value;

    if (!title || !content) {
      showToast("error","제목, 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    const data = {
      title,
      content,
      email: localStorageEmail,
    };

    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    if (selectedPlace === "게시물" && selectedImage) {
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
          headers: {},
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    setSelectedImage(selectedImage);
    setFileName(selectedImage ? selectedImage.name : null);
    setImageSrc(selectedImage ? URL.createObjectURL(selectedImage) : null);
  };

  return (
    <>
      <s.Main>
        <Head active={false} />
        <Side />
        <s.Write_Main>
          <s.Writing>
            <s.WriteTool>
              <s.Tool>
                <span>올릴곳</span>
                <s.CategorySelect>
                  <option value="게시물">게시물</option>
                  <option value="대회">대회</option>
                </s.CategorySelect>
              </s.Tool>
              <s.Tool>
                <span>카테고리</span>
                <s.CategorySelect>
                  <option value="웹">웹</option>
                  <option value="서버">서버</option>
                  <option value="안드">안드로이드</option>
                  <option value="iOS">iOS</option>
                  <option value="임베">임베디드</option>
                  <option value="디자인">디자인</option>
                  <option value="기타">기타</option>
                </s.CategorySelect>
              </s.Tool>
              <s.Tool>
                <p>이미지추가</p>
                <s.plustimg>
                  <img src={ImgPlus} />
                </s.plustimg>
              </s.Tool>
              <s.Tool>
              <s.SubmitButton type="submit">Submit</s.SubmitButton>
              <s.plustimg>
              <img src={SubmitImg}/>
              </s.plustimg>
              </s.Tool>
            </s.WriteTool>
            <s.WriteUnder>
            <s.WriteForm onSubmit={onSubmitHandler}>
            {/* <div className="write_img1">
              {imageSrc && <img src={imageSrc} alt="Preview" />}
            </div> */}
      <s.WriteTitlelMain>
            <s.WriteTitle
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </s.WriteTitlelMain>
            <s.WriteDetailMain>
            <s.WriteDetail
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></s.WriteDetail>
            </s.WriteDetailMain>
            {/* <label htmlFor="file">
              <div className="btn-upload">사진 설정</div>
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleImageChange}
            /> */}
            {/* {fileName && <div>{fileName}</div>} */}
            </s.WriteForm>
            </s.WriteUnder>
          </s.Writing>
        </s.Write_Main>
      </s.Main>
    </>
  );
};

export default Sidewrite;

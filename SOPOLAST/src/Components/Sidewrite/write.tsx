import React from "react";
import axios from "axios";
import Head from "../../constants/head/Head/head";
import Side from "../../constants/Sidebar/Side/side";
import ImgPlus from "src/Assets/image/imgplus.png";
import SubmitImg from "src/Assets/image/submitimg.png";
import * as s from "./Write.style";
import { showToast } from "src/constants/Swal/Swal";
import UseWrite from "src/hooks/Wirte/useWirte"

const Sidewrite = () => {
  const {
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

  } = UseWrite();
  return (
    
      <s.Main>
        <Head active={false} />
        <Side />
        <s.Write_Main>
          <s.Writing>
            <s.From onSubmit={onSubmitHandler}>
              <s.WriteTool>
                <s.Tool>
                  <span>올릴곳</span>
                  <s.CategorySelect
                    onChange={(e) => setselectPlace(e.target.value)}>
                    <option value="게시물">게시물</option>
                    <option value="대회">대회</option>
                  </s.CategorySelect>
                </s.Tool>
                <s.Tool>
                  <span>카테고리</span>
                  <s.CategorySelect onChange={(e)=> setSelectClass(e.target.value)}>
                    <option value="web">웹</option>
                    <option value="server">서버</option>
                    <option value="Android">안드로이드</option>
                    <option value="iOS">iOS</option>
                    <option value="Embedded">임베디드</option>
                    <option value="design">디자인</option>
                    <option value="etc">기타</option>
                  </s.CategorySelect>
                </s.Tool>
                <s.Tool>
                  <span>이미지추가</span>
                  <s.plustimg>
                    <label htmlFor="change-img">
                      <img src={ImgPlus} />
                    </label>
                    <s.btnupload
                      name="file"
                      type="file"
                      id="change-img"
                      onChange={handleChangeImg}
                    ></s.btnupload>
                  </s.plustimg>
                  
                </s.Tool>

                <s.SubmitButtonMain>
                  <s.SubmitButton ></s.SubmitButton>
                  <s.plustimg>
                    <img src={SubmitImg} />
                  </s.plustimg>
                </s.SubmitButtonMain>
              </s.WriteTool>
              <s.WriteUnder>
                <s.WriteForm>
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
                    {selectedImg && <s.WriteImg src={selectedImg} />}
                    <s.WriteDetail
                      placeholder="내용"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></s.WriteDetail>
                  </s.WriteDetailMain>

                  {/* {fileName && <div>{fileName}</div>} */}
                </s.WriteForm>
              </s.WriteUnder>
            </s.From>
          </s.Writing>
        </s.Write_Main>
      </s.Main>

  );
};

export default Sidewrite;

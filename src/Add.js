import React, { useEffect } from "react";

//파라미터
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
//수정해주는 데이터 !
import { useDispatch } from "react-redux";
import { createCard } from "./redux/modules/dictionary";

const Add = (props) => {
  const history = useHistory();
  const index = useParams();

  //리액트요소(input) DOM으로 가져오기 작업
  const inputWord = React.useRef(null);
  const dispatch = useDispatch();

  const addNewWord = () => {
    //crateCard를 사용

    console.log(inputWord.current.value);
  };

  return (
    <div>
      <H2>단어 추가하기</H2>
      <Container>
        <Form>
          {/* 추가해주기htmlfor="input-word" */}
          <label htmlFor="input">해석</label>
          <input
            required
            type="text"
            id="input-word"
            ref={inputWord}
            maxLength="8"
          />
          <button onClick={addNewWord}>입력하기</button>
        </Form>
      </Container>
    </div>
  );
};

const H2 = styled.h2`
  text-align: center;
  margin: 20px 0px;
  font-size: 18px;
  color: green;
`;

const Container = styled.div`
  max-width: 50%;
  background-color: #fff;
  padding: 0;
  margin: auto;
  margin: 50px auto;
  vertical-align: baseline;
  border: 1px solid #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Add;

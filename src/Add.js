import React, { useEffect } from "react";

//파라미터
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
//수정해주는 데이터 !
import { useDispatch } from "react-redux";
//redux.ActionCreators
import { createCard } from "./redux/modules/dictionary";
//redex 데이터 가져오기
import { useSelector } from "react-redux";
//firebase
import { addCardFB } from "./redux/modules/dictionary";

const Add = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const word_data = useSelector((state) => state.dictionary.list);

  //리액트요소(input) DOM으로 가져오기 작업
  const words = React.useRef(null);
  const descriptions = React.useRef(null);
  const exmples = React.useRef(null);
  const memo = React.useRef(null);

  const addNewWord = () => {
    const myCard = {
      word: words.current.value,
      description: descriptions.current.value,
      exmple: exmples.current.value,
      addmemo: memo.current.value,
    };
    if (
      words.current.value === "" ||
      descriptions.current.value === "" ||
      exmples.current.value === "" ||
      memo.current.value === ""
    ) {
      alert("값을 모두 입력해주세요");
    } else {
      // dispatch(createCard(myCard));
      dispatch(
        addCardFB({
          word: words.current.value,
          description: descriptions.current.value,
          exmple: exmples.current.value,
          addmemo: memo.current.value,
        })
      );
    }
  };

  return (
    <div>
      <H2>단어 추가하기</H2>
      <Container>
        <Form>
          {/* 추가해주기htmlfor="input-word" */}
          <Labal htmlFor="words">단어</Labal>
          <Input required type="text" id="words" ref={words} maxLength="8" />
          <Labal htmlFor="descriptions">뜻</Labal>
          <Input
            required
            type="text"
            id="descriptions"
            ref={descriptions}
            maxLength="8"
          />
          <Labal htmlFor="exmple">예문</Labal>
          <Input
            required
            type="text"
            id="exmple"
            ref={exmples}
            maxLength="10"
          />
          <Labal htmlFor="memo">메모</Labal>
          <Input required type="text" id="memo" ref={memo} maxLength="10" />
          <ButtonBox>
            <Button
              onClick={() => {
                addNewWord();
                history.push("/");
              }}
            >
              입력하기
            </Button>
          </ButtonBox>
        </Form>
      </Container>
    </div>
  );
};

const H2 = styled.h2`
  text-align: center;
  margin: 20px 0px;
  font-size: 18px;

  font-family: "NanumSquareRoundExtraBold";
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 50%;
  background-color: transparent;
  padding: 0;
  margin: auto;
  margin: 50px auto;
  vertical-align: baseline;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Labal = styled.label`
  font-family: "NanumSquareRoundExtraBold";
  margin: 10px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-family: "NanumSquareRoundExtraBold";
  background-color: rgba(200, 200, 200, 0.5);
  width: 150px;
  height: 50px;
  border-radius: 20px;
  margin: 20px;
  &:hover {
    box-shadow: 0 4px 4px -4px black;
  }
`;
const Input = styled.input`
  font-family: "NanumSquareRoundExtraBold";
  background-color: transparent;
  border-bottom: 3px solid rgba(200, 200, 200, 0.5);
  height: 20px;
  &:focus {
    outline: none;

    height: 50px;

    box-shadow: 0 4px 4px -4px black;
  }
`;
export default Add;

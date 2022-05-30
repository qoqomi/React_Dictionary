import React from "react";
//새로운 창들
import Main from "./Main";
import Add from "./Add";
import background from "./img/paper.jpeg";
//css
import "./App.css";
import "./CardBox.css";
import "./Detail.css";
//FontAwesomeIcon
import styled, { keyframes } from "styled-components";

//Route
import { Route, Link } from "react-router-dom";

function App() {
  const [list, setList] = React.useState([
    "영화관 가기",
    "매일 책읽기",
    "수영 배우기",
  ]);
  const text = React.useRef(null);

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    setList([...list, text.current.value]);
  };

  return (
    <div className="App">
      <Header>
        <H1>중국어 단어장</H1>
      </Header>

      <Route path="/" component={Main} exact />
      <Route path="/add" component={Add} exact word="word" />
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  color: black;
  background: white;
  border-bottom: 4px solid rgba(200, 200, 200, 0.5);
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  color: black;
  font-family: "NanumSquareRoundExtraBold";
  font-size: 25px;
  margin: auto;
`;
export default App;

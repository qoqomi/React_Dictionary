import React from "react";
//새로운 창들
import Main from "./Main";
import Detail from "./Detail";
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
  return (
    <div className="App">
      <header>
        <h1>중국어 단어장</h1>
      </header>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
    </div>
  );
}
export default App;

import React from "react";
import Main from "./Main";
import background from "./img/paper.jpeg";
//font
import "./App.css";
import "./CardBox.css";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;

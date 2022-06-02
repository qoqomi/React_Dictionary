// 리액트 패키지를 불러옵니다.
import React, { useState } from "react";
//css
import "./style.css";
import "./CardBox.css";
import styled, { keyframes } from "styled-components";
//주소이동
import { useHistory, Link } from "react-router-dom";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCard,
  modifyCard,
  deleteCardFB,
} from "./redux/modules/dictionary";
import { useParams } from "react-router-dom";
//middlewares

const Main = (props) => {
  const index = useParams();
  const history = useHistory();
  const word_data = useSelector((state) => state.dictionary.list);
  const dispatch = useDispatch();
  console.log(word_data);
  return (
    <div>
      <div className="card_Main">
        {word_data.map((el, i) => {
          return (
            <article className="card_Box" key={i}>
              <div className="card_Box_Btn">
                <button style={{ marginLeft: "10px" }}>
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <a>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </a>
                <button>
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => dispatch(deleteCardFB(el.id))}
                  />
                </button>
              </div>
              <div>
                <h4>{el.word}</h4>
                <span style={{ fontSize: "14px" }}>{el.description}</span>
              </div>

              <p style={{ fontSize: "16px", margin: "0" }}>{el.exmple}</p>
              <div style={{ fontSize: "14px", color: "blue" }}>
                {el.addmemo}
              </div>
            </article>
          );
        })}
      </div>
      <AddBtn>
        <Link to="/add">
          <FontAwesomeIcon icon={faPlus} size="2x" style={{ color: "white" }} />
        </Link>
      </AddBtn>
    </div>
  );
};

export default Main;

const AddBtn = styled.div`
  background-color: #bcbcbc;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
  //아이콘위치
  display: flex;
  justify-content: center;
  align-items: center;
  //box위치
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

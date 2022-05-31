// 리액트 패키지를 불러옵니다.
import React from "react";
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
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Main = (props) => {
  const index = useParams();
  const history = useHistory();

  console.log(index);
  const word_data = useSelector((state) => state.dictionary.list);

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
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div>
                <h4>{word_data[i].word}</h4>
                <span style={{ fontSize: "14px" }}>
                  {word_data[i].description}
                </span>
              </div>

              <p style={{ fontSize: "16px", margin: "0" }}>
                {word_data[i].exmple}
              </p>
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
  background-color: rgba(200, 200, 200, 0.5);
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

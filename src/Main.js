// 리액트 패키지를 불러옵니다.
import React from "react";
//css
import "./style.css";
import "./CardBox.css";
import styled, { keyframes } from "styled-components";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

//redux 데이터 가져오기
import { useSelector } from "react-redux";

const Main = (props) => {
  const word_data = useSelector((state) => state.dictionary.list);
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
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div>
                <h4>{word_data[i].word}</h4>
                <span style={{ fontSize: "14px" }}>{el.sang}</span>
              </div>

              <p style={{ fontSize: "16px", margin: "0" }}>{el.description}</p>
              <div style={{ fontSize: "14px", color: "blue" }}>
                {el.sampleword}
              </div>
            </article>
          );
        })}

        {/* {word_data.map((el, i) => {
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
                <span style={{ fontSize: "14px" }}>{el.sang}</span>
              </div>

              <p style={{ fontSize: "16px", margin: "0" }}>{el.description}</p>
              <div style={{ fontSize: "14px", color: "blue" }}>
                {el.sampleword}
              </div>
            </article>
            
          );
        })} */}
      </div>

      <button> 버튼입니다</button>
    </div>
  );
};

// const ListStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: auto;
// `;

// const ItemStyle = styled.div`
//   padding: 16px;
//   margin: 8px;
//   background-color: aliceblue;
// `;

export default Main;

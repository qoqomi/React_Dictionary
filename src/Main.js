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

const Main = (props) => {
  return (
    <div>
      <div className="card_Main">
        <article className="card_Box">
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
            <h4>한자</h4>
            <span style={{ fontSize: "14px" }}>[성조]</span>
          </div>

          <p style={{ fontSize: "16px", margin: "0" }}>뜻</p>
          <div style={{ fontSize: "14px", color: "blue" }}>예제한자</div>
          <div style={{ fontSize: "14px", color: "blue" }}>뜻</div>
        </article>
        <article className="card_Box">
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
            <h4>한자</h4>
            <span style={{ fontSize: "14px" }}>[성조]</span>
          </div>

          <p style={{ fontSize: "16px", margin: "0" }}>뜻</p>
          <div style={{ fontSize: "14px", color: "blue" }}>예제한자</div>
          <div style={{ fontSize: "14px", color: "blue" }}>뜻</div>
        </article>
        <article className="card_Box">
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
            <h4>한자</h4>
            <span style={{ fontSize: "14px" }}>[성조]</span>
          </div>

          <p style={{ fontSize: "16px", margin: "0" }}>뜻</p>
          <div style={{ fontSize: "14px", color: "blue" }}>예제한자</div>
          <div style={{ fontSize: "14px", color: "blue" }}>뜻</div>
        </article>
        <article className="card_Box">
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
            <h4>한자</h4>
            <span style={{ fontSize: "14px" }}>[성조]</span>
          </div>

          <p style={{ fontSize: "16px", margin: "0" }}>뜻</p>
          <div style={{ fontSize: "14px", color: "blue" }}>예제한자</div>
          <div style={{ fontSize: "14px", color: "blue" }}>뜻</div>
        </article>
      </div>
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

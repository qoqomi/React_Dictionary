import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Detail = () => {
  const cat = useParams();
  const history = useHistory();
  console.log(cat);
  return (
    <div>
      <div className="Main_box">
        <h2>단어 추가하기</h2>
        <from>
          <div className="Main_box__sub">
            <label for="input-word">단어</label>
            <input
              value=""
              required
              id="input-word"
              type="text"
              maxLength="8"
            />
          </div>
          <div className="Main_box__sub">
            <label for="input-word">병음</label>
            <input required id="input" type="text" maxLength="8" />
          </div>
          <div className="Main_box__sub">
            <label for="input-word">의미</label>
            <input required id="input-word" type="text" maxLength="8" />
          </div>
          <div className="Main_box__sub">
            <label for="input-word">예문</label>
            <input required id="input-word" type="text" maxLength="8" />
          </div>
          <div className="Main_box__sub">
            <label for="input-word">해석</label>
            <input required id="input-word" type="text" maxLength="8" />
          </div>
        </from>
      </div>

      <div
        onClick={() => {
          history.push("/");
        }}
      >
        강아지화면
      </div>
    </div>
  );
};

export default Detail;

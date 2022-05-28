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
          <div>
            <label>단어</label>
            <input></input>
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

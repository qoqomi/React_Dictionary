import React from "react";
//new browser
import Main from "./Main";
import Add from "./Add";
//css
import "./App.css";
import "./CardBox.css";
import "./Detail.css";
import Spinner from "./Spinner";
//style component
import styled from "styled-components";

//Route
import { Route, Link } from "react-router-dom";

import { loadCardFB } from "./redux/modules/dictionary";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.dictionary.is_loaded);

  React.useEffect(() => {
    dispatch(loadCardFB());
  }, [dispatch]);

  return (
    <div className="App">
      <Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <H1>중국어 단어장</H1>
        </Link>
      </Header>

      <Route path="/" component={Main} exact />
      <Route path="/add" component={Add} exact />
      {!is_loaded && <Spinner />}
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  color: black;
  background: white;
  border-bottom: 4px solid rgba(200, 200, 200);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0%;
  z-index: 2;
`;

const H1 = styled.h1`
  color: black;
  font-family: "NanumSquareRoundExtraBold";
  font-size: 30px;
  margin: auto;
  font-weight: 600;
`;
export default App;

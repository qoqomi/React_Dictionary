import React from "react";
import styled from "styled-components";

import EnergySavingsLeafSharpIcon from "@mui/icons-material/EnergySavingsLeafSharp";

const Spinner = (props) => {
  return (
    <Outter>
      <EnergySavingsLeafSharpIcon
        style={{
          color: "#a0a0a0",
          fontSize: "200px",
        }}
      />
    </Outter>
  );
};
const Outter = styled.div`
  background-color: rgba(200, 200, 200);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
export default Spinner;

import React from "react";
import Loader from "react-spinners/SyncLoader";
import { css } from "@emotion/core/";

const styling = css`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Spinner({ loading }) {
  return <Loader css={styling} color={"#36D7B7"} />;
}

export default Spinner;

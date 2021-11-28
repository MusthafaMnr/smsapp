import React from 'react'
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";


export default  function Spinners() {

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    return (

        <DotLoader color="#4154f1"  css={override} />
    )
}



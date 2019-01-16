import React from "react";
import styled from "styled-components";
import { __GRAY_100 } from "../helpers/colors";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${__GRAY_100};
  padding: 20px 8px;
  margin-top: 20px;
  margin-bottom: 3em;
  border-radius: 4px;
`;

const DecodingResult = ({ ekaAddress, decodedAddress }) => {
  return <Container>{decodedAddress}</Container>;
};

export default DecodingResult;

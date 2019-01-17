import React from "react";
import styled from "styled-components";
import { __GRAY_200 } from "../helpers/colors";
import { MarkdownTitle } from "./EncodingResult";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MyMarkDown = styled.div`
  font-family: monospace;
  letter-spacing: 1px;
  background: ${__GRAY_200};
  padding: 3px 6px;
  border-radius: 4px;
`;

const DecodedAddress = ({ decodedAddress }) => {
  return (
    <Container>
      <MarkdownTitle>Ethereum Address</MarkdownTitle>
      <MyMarkDown>{decodedAddress}</MyMarkDown>
    </Container>
  );
};

export default DecodedAddress;

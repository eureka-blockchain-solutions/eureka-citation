import React from "react";
import styled from "styled-components";
import { MarkdownTitle } from "./EncodingResult";
import Markdown from "react-markdown";
import { __GRAY_200 } from "../helpers/colors";
import {EndPrefix, InitialPrefix} from "../constants/Prefix";

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

export const Prefix = styled.span`
  font-weight: bold;
`;
const EurekaAddress = ({ encodedAddress, initialPrefix, endPrefix }) => {
  return (
    <Container>
      <MarkdownTitle>EKA Address</MarkdownTitle>
      <MyMarkDown>
        <Prefix>{InitialPrefix}</Prefix>
        {encodedAddress}
        <Prefix>{EndPrefix}</Prefix>
      </MyMarkDown>
    </Container>
  );
};

export default EurekaAddress;

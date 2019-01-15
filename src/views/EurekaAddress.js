import React from "react";
import styled from "styled-components";
import { MarkdownTitle } from "./EncodingResult";
import Markdown from "react-markdown";
import { __GRAY_200 } from "../helpers/colors";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyMarkDown = styled.div`
  font-family: monospace;
  letter-spacing: 1px;
  background: ${__GRAY_200};
  padding: 3px 6px;
  border-radius: 4px;
`;

const Prefix = styled.span`
  font-weight: bold;
`;
const EurekaAddress = ({ encodedAddress }) => {
  return (
    <Container>
      <MarkdownTitle>EKA Address</MarkdownTitle>
      <MyMarkDown>
        <Prefix>EKA</Prefix>
        {encodedAddress}
        <Prefix>xy</Prefix>
      </MyMarkDown>
    </Container>
  );
};

export default EurekaAddress;

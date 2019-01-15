import React from "react";
import styled from "styled-components";
import EurekaAddress from "./EurekaAddress";
import LatexCitation from "./LatexCitation";
import EKAQRCode from "./QRCode";
import Markdown from "react-markdown";
import Icon from "./icons/Icon";
import { __GRAY_100, __GRAY_200, __GRAY_300 } from "../helpers/colors";
import { Separator } from "./Separator";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: #302d960a;
  padding: 20px 8px;
  margin-top: 20px;
  margin-bottom: 3em;
  border-radius: 4px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MarkdownTitle = styled.h3`
  text-align: center;
  font-size: 14px;
  font-family: monospace;
`;
const EncodingResult = ({ ethAddress, encodedAddress }) => {
  const markdown = `
        ${ethAddress}
    `;
  return (
    <Container>
      <Header>
        <MarkdownTitle style={{ marginBottom: -15 }}>
          Evaluating the following address:
        </MarkdownTitle>
        <Markdown
          source={markdown}
          escapeHtml={false}
          style={{ marginTop: 0 }}
        />
      </Header>
      <Separator bottom={15} top={15} width={"10%"} />
      <SubContainer>
        <EurekaAddress encodedAddress={encodedAddress} />
        <EKAQRCode encodedAddress={encodedAddress} />
        <LatexCitation encodedAddress={encodedAddress} />
      </SubContainer>
    </Container>
  );
};

export default EncodingResult;

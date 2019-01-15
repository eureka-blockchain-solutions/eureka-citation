import React from "react";
import styled from "styled-components";
import EurekaAddress from "./EurekaAddress";
import LatexCitation from "./LatexCitation";
import EKAQRCode from "./QRCode";
import Markdown from "react-markdown";
import Icon from "./icons/Icon";
import { __GRAY_100 } from "../helpers/colors";
import { Separator } from "./Separator";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${__GRAY_100};
  padding: 20px 8px;
  margin-top: 10px;
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
const Title = styled.h3`
  text-align: center;
  font-size: 14px;
  font-family: monospace;
  margin-bottom: -15px;
`;
const EncodingResult = ({ ethAddress, encodedAddress }) => {
  const markdown = `
        ${ethAddress}
    `;
  return (
    <Container>
      <Header>
        <Title>Evaluating the following address:</Title>
        <Markdown
          source={markdown}
          escapeHtml={false}
          style={{ marginTop: 0 }}
        />
      </Header>
      <Separator bottom={30} top={15} width={"30%"} height={"5px"} />
      <SubContainer>
        <EurekaAddress encodedAddress={encodedAddress} />
        <EKAQRCode encodedAddress={encodedAddress} />
        <LatexCitation encodedAddress={encodedAddress} />
      </SubContainer>
    </Container>
  );
};

export default EncodingResult;

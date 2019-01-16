import React from "react";
import QRCode from "qrcode.react";
import styled from "styled-components";
import { MarkdownTitle } from "./EncodingResult";
import { EndPrefix, InitialPrefix } from "../constants/Prefix";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const EKAQRCode = ({ encodedAddress }) => {
  return (
    <Container>
      <MarkdownTitle>QR Code</MarkdownTitle>
      <QRCode value={InitialPrefix + encodedAddress + EndPrefix} size={150} />
    </Container>
  );
};

export default EKAQRCode;

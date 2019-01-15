import React from "react";
import QRCode from "qrcode.react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const EKAQRCode = ({ encodedAddress }) => {
  return (
    <Container>
      <QRCode value={encodedAddress} size={150} />
    </Container>
  );
};

export default EKAQRCode;

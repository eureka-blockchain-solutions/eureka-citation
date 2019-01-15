import React from "react";
import styled from "styled-components";
import EurekaAddress from "./EurekaAddress";
import QRCode from "./QRCode";
import LatexCitation from "./LatexCitation";

const Container = styled.div``;

const EncodingResult = ({ encodedAddress }) => {
  return (
    <Container>
      <EurekaAddress encodedAddress={encodedAddress} />
      <QRCode />
      <LatexCitation />
    </Container>
  );
};

export default EncodingResult;

import React from "react";
import styled from "styled-components";
import EurekaAddress from "./EurekaAddress";
import LatexCitation from "./LatexCitation";
import EKAQRCode from "./QRCode";
import Icon from "./icons/Icon";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  text-align: center;
`;
const EncodingResult = ({ ethAddress, encodedAddress }) => {
  return (
    <Container>
      <Header>
        <Title>{ethAddress}</Title>
        <Icon icon={"ethereum"} width={15} height={15} />
      </Header>
      <SubContainer>
        <EurekaAddress encodedAddress={encodedAddress} />
        <EKAQRCode encodedAddress={encodedAddress} />
        <LatexCitation encodedAddress={encodedAddress} />
      </SubContainer>
    </Container>
  );
};

export default EncodingResult;

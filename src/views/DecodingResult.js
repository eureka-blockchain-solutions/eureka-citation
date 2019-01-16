import React from "react";
import styled from "styled-components";
import { __GRAY_100 } from "../helpers/colors";
import {AddressesContainer, MarkdownTitle, QRContainer, SubContainer} from "./EncodingResult";
import { Separator } from "./Separator";
import EurekaAddress from "./EurekaAddress";
import LatexCitation from "./LatexCitation";
import EKAQRCode from "./QRCode";
import DecodedAddress from "./DecodedAddress";

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
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DecodingResult = ({ ekaAddress, decodedAddress }) => {
  return (
    <Container>
      <Header>
        <MarkdownTitle>
          Evaluating the following address:
          <br />
          <span style={{ fontWeight: "lighter" }}>{ekaAddress}</span>
        </MarkdownTitle>
      </Header>
      <Separator bottom={15} top={15} width={"10%"} />
      <SubContainer>
        <AddressesContainer>
          <DecodedAddress decodedAddress={decodedAddress} />
        </AddressesContainer>
        <QRContainer>
          <EKAQRCode value={decodedAddress} />
        </QRContainer>
      </SubContainer>
    </Container>
  );
};

export default DecodingResult;

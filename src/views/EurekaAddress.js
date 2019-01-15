import React from "react";
import styled from "styled-components";
import { MarkdownTitle } from "./EncodingResult";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const EurekaAddress = ({ encodedAddress }) => {
  return (
    <Container>
      <MarkdownTitle>Eureka Address</MarkdownTitle>
    </Container>
  );
};

export default EurekaAddress;

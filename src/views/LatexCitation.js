import React from "react";
import styled from "styled-components";
import { MarkdownTitle } from "./EncodingResult";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const LatexCitation = () => {
  return (
    <Container>
      <MarkdownTitle>LatexCitation</MarkdownTitle>
    </Container>
  );
};

export default LatexCitation;

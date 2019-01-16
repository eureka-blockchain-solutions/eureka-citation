import React from "react";
import styled from "styled-components";
import { MarkdownTitle } from "./EncodingResult";
import { MyMarkDown, Prefix } from "./EurekaAddress";
import {
  __ALERT_ERROR,
  __ALERT_WARNING,
  __GRAY_400,
  __SECOND,
  __THIRD
} from "../helpers/colors";

const Container = styled.div`
  flex: 11;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContentEditable = styled.div`
  background: white;
  overflow: auto;
  font-family: monospace;
  border: 1px solid ${__GRAY_400};
  padding: 2px 10px;
`;

const Entry = styled.span`
  font-weight: bold;
  color: #000000;
`;

const Label = styled.span`
  color: ${__ALERT_WARNING};
  font-weight: bold;
`;

const String = styled.span`
  font-weight: normal;
  color: ${__ALERT_ERROR};
`;

const Digit = styled.span``;

const Default = styled.span`
  color: #000000;
`;

const MyProperty = styled.span`
  font-weight: bold;
  color: ${__SECOND};
`;

const BibLineContainer = styled.span`
  margin-left: 38px;
`;

const getProperty = name => {
  return <MyProperty>{name}</MyProperty>;
};
const getValue = value => {
  return (
    <String>
      <Default>{`{`}</Default>
      {value}
      <Default>{`}`}</Default>
    </String>
  );
};

const BibLine = ({ name, nameType, value, ...otherProps }) => {
  return (
    <BibLineContainer>
      {getProperty(name)} = {getValue(value)}
      {otherProps.last ? null : ","}
      <br />
    </BibLineContainer>
  );
};

const LatexCitation = ({ encodedAddress, initialPrefix, endPrefix }) => {
  return (
    <Container>
      <MarkdownTitle>BibTex</MarkdownTitle>
      <ContentEditable contentEditable spellCheck="false">
        <Entry>
          {`@`}article{`{`}
          <Label>{initialPrefix + encodedAddress + endPrefix}</Label>
          <Default>,</Default>
          <br />
        </Entry>
        <BibLine name={"author"} value={"tbd"} />
        <BibLine name={"year"} value={"tbd"} />
        <BibLine name={"title"} value={"tbd"} />
        <BibLine name={"journal"} value={"tbd"} />
        <BibLine name={"volume"} value={"tbd"} />
        <BibLine name={"number"} value={"tbd"} />
        <BibLine name={"pages"} value={"tbd"} />
        <BibLine name={"doi"} value={"tbd"} />
        <BibLine name={"isbn"} value={"tbd"} />
        <BibLine name={"issn"} value={"tbd"} />
        <BibLine name={"pmid"} value={"tbd"} />
        <BibLine name={"url"} value={"tbd"} last />
        <Default>{`}`}</Default>
      </ContentEditable>
    </Container>
  );
};

export default LatexCitation;

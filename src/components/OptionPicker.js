import React from "react";
import styled from "styled-components";
import RadioButton from "../views/RadioButton";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OptionPicker = () => {
  return (
    <Container>
      <RadioButton id={"encoding"}>Encoding</RadioButton>
      <RadioButton id={"decoding"}>Decoding</RadioButton>
    </Container>
  );
};

export default OptionPicker;

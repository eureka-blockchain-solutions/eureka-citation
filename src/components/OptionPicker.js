import React from "react";
import styled from "styled-components";
import RadioButton from "../views/RadioButton";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OptionPicker = ({ otherProps }) => {
  return (
    <Container>
      <RadioButton id={"encoding"} onChange={value => {}}>
        Encoding
      </RadioButton>
      <RadioButton id={"decoding"} onChange={value => {}}>
        Decoding
      </RadioButton>
    </Container>
  );
};

export default OptionPicker;

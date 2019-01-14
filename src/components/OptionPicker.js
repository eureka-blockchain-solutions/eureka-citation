import React from "react";
import styled from "styled-components";
import RadioButton from "../views/RadioButton";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OptionPicker = ({ ...otherProps }) => {
  return (
    <Container>
      <RadioButton
        id={"encoding"}
        checked={window.location.href.toString().includes('encoding'.toString())}
        onChange={value => {
          otherProps.onChange(value);
        }}
      >
        Encoding
      </RadioButton>
      <RadioButton
        id={"decoding"}
        checked={window.location.href.toString().includes('decoding'.toString())}
        onChange={value => {
          otherProps.onChange(value);
        }}
      >
        Decoding
      </RadioButton>
    </Container>
  );
};

export default OptionPicker;

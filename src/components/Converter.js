import React, { Component } from "react";
import styled from "styled-components";
import OptionPicker from "./OptionPicker";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;
const Title = styled.h2``;
class Converter extends Component {
  render() {
    return (
      <Container>
        <Title>What do you want to do?</Title>
        <OptionPicker />
      </Container>
    );
  }
}

export default Converter;

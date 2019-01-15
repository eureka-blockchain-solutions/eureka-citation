import React, { Component } from "react";
import styled from "styled-components";
import EurekaLogo from "./views/icons/EurekaLogo";
import Converter from "./components/Converter";
import { LARGE_DEVICES } from "./helpers/mobile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RelativeContainer = styled.div`
  position: relative;
  margin-top: 30px;
`;

const Title = styled.h1`
  ${LARGE_DEVICES`
        font-size: 38px;
    `};
  position: absolute;
  font-family: "Indie Flower", cursive;
  bottom: -32px;
  right: -82px;
  font-size: 47px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <RelativeContainer>
          <EurekaLogo width={700} />
          <Title>Base58 Converter</Title>
        </RelativeContainer>
        <Converter />
      </Container>
    );
  }
}

export default App;

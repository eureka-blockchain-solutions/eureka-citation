import React, { Component } from "react";
import styled from "styled-components";
import { InputField } from "../views/design-components/Inputs";
import web3 from "web3";
import { __FIFTH, __GRAY_200, __THIRD } from "../helpers/colors";
import bs58 from "bs58";
import animationData from "../views/animations/animation-w60-h45";
import LottieControl from "../views/LottieManager";

const Container = styled.div``;

const ConvertButton = styled.div`
  transition: 0.3s all ease-in-out;
  opacity: ${props => (props.status === "valid" ? 1 : 0.5)};
  cursor: ${props => (props.status === "valid" ? "pointer" : "default")};
  pointer-events: ${props => (props.status === "valid" ? "default" : "none")};
  color: ${__FIFTH};
  text-transform: uppercase;
  border: ${props =>
    props.status === "valid"
      ? `1px solid ${__FIFTH}`
      : `1px solid ${__GRAY_200}`};
  border-radius: 4px;
  padding: 4px 12px;
`;

const ConvertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

class Encoding extends Component {
  constructor() {
    super();
    this.state = {
      status: null,
      address: null,
      encodedAddress: null,
      isConverting: false
    };
  }

  componentDidMount() {}

  checkStatus(value) {
    if (web3.utils.isAddress(value)) {
      this.setState({ status: "valid", address: value });
    } else return this.setState({ status: "error", address: value });
  }

  convert() {
    if (
      this.state.address.includes("0x") &&
      web3.utils.isAddress(this.state.address)
    ) {
      this.setState({ isConverting: true });
      const bytes = Buffer.from(this.state.address.substr(2), "hex");
      this.setState({ encodedAddress: bs58.encode(bytes) });
    } else {
      console.error("Address is not well formatted");
    }
  }

  render() {
    return (
      <Container>
        <Label>EUREKA Addresss</Label>
        <InputField
          style={{ marginTop: 5 }}
          onChange={e => {
            this.checkStatus(e.target.value);
          }}
          status={this.state.status}
          placeholder={"Enter here your Address.."}
        />
        <ConvertContainer>
          <LottieControl
            animationData={animationData}
            onComplete={() => {}}
            isPaused={!this.state.isConverting}
            width={75}
          />
          <ConvertButton
            status={this.state.status}
            onClick={() => {
              this.convert();
            }}
          >
            Convert
          </ConvertButton>
        </ConvertContainer>

        {this.state.encodedAddress}
      </Container>
    );
  }
}

export default Encoding;

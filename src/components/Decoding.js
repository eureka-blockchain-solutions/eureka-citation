import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { InputField } from "../views/design-components/Inputs";
import bs58 from "bs58";
import LottieControl from "../views/LottieManager";
import animationData from "../views/animations/animation-w60-h45";
import { ConvertButton, ConvertContainer } from "./Encoding";
import DecodingResult from "../views/DecodingResult";
import { EndPrefix, InitialPrefix } from "../constants/Prefix";
import { ALLOWED_CHARACTERS_BS58 } from "../constants/Base58Characters";

const Container = styled.div``;
const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
`;
class Decoding extends Component {
  constructor() {
    super();
    this.state = {
      status: null,
      ekaAddress: null,
      decodedAddress: null,
      isConverting: false
    };
  }

  componentDidMount() {}

  areCharactersAllowedByBS58(value) {
    let flat = true;
    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i).toString();
      if (!(ALLOWED_CHARACTERS_BS58.indexOf(c) > -1)) {
        // character is not in the array and thus is not a valid character
        flat = false;
      }
    }
    return flat;
  }

  checkStatus(value) {
    /*    if (this.state.decodedAddress) {
      this.setState({ decodedAddress: null });
    }*/
    if (!this.areCharactersAllowedByBS58(value)) {
      this.setState({ status: "error" });
    }
    /*    const bytes = bs58.decode(value);
    const potentialAddress = "0x" + bytes.toString("hex");
    console.log(potentialAddress);*/
  }

  decode() {
    // EKA3PTEBL6UqrZn1zJNxgewtbUQ5UNWxy
    let addressToDecode = this.state.ekaAddress;
    if (
      this.state.ekaAddress.toString().includes(InitialPrefix) &&
      this.state.ekaAddress.toString().includes(EndPrefix)
    ) {
      addressToDecode = this.state.ekaAddress
        .toString()
        .replace(InitialPrefix, "")
        .toString()
        .replace(EndPrefix, "");
    }

    const bytes = bs58.decode(addressToDecode);
    this.setState({ decodedAddress: "0x" + bytes.toString("hex") });
  }

  render() {
    return (
      <Container>
        <Label>EKA Address</Label>
        <InputField
          onChange={e => {
            this.checkStatus(e.target.value);
          }}
          status={this.state.status}
          placeholder={"EKA3PTEBL6UqrZn1zJNxgewtbUQ5UNWxy"}
        />
        <ConvertContainer
          onClick={async () => {
            await this.decode();
          }}
        >
          <ConvertButton status={this.state.status}>
            Decode
            <LottieControl
              animationData={animationData}
              onComplete={() => {
                this.setState({ isConverting: false });
              }}
              isPaused={!this.state.isConverting}
              width={30}
            />
          </ConvertButton>
        </ConvertContainer>

        {this.state.decodedAddress ? (
          <Fragment>
            <DecodingResult
              decodedAddress={this.state.decodedAddress}
              ekaAddress={this.state.ekaAddress}
            />
          </Fragment>
        ) : null}
      </Container>
    );
  }
}

export default Decoding;

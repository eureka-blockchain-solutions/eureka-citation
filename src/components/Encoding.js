import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { InputField } from "../views/design-components/Inputs";
import web3 from "web3";
import { __FIFTH, __GRAY_200, __THIRD } from "../helpers/colors";
import bs58 from "bs58";
import animationData from "../views/animations/animation-w60-h45";
import LottieControl from "../views/LottieManager";
import AuthorLookup from "./AuthorLookup";
import EncodingResult from "../views/EncodingResult";

import { EndPrefix } from "../constants/Prefix";
import sha256 from "sha256";
import crypto from "crypto";

const Container = styled.div``;

export const ConvertButton = styled.div`
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

export const ConvertContainer = styled.div`
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

const MyAddress = styled.div``;
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
    if (this.state.encodedAddress) {
      this.setState({ encodedAddress: null });
    }
    if (web3.utils.isAddress(value)) {
      this.setState({ status: "valid", address: value });
    } else return this.setState({ status: "error", address: value });
  }

  async encode() {
    this.setState({ encodedAddress: null });

    if (
      this.state.address.includes("0x") &&
      web3.utils.isAddress(this.state.address)
    ) {
      this.setState({ isConverting: true });
      await new Promise(resolve => setTimeout(resolve, 300));

      // TODO: mention it in the documentation because is more efficient
        // TODO: since we are using a buffer representation you can represent whatever base you want (kinda conversion bridge)
      let address = new Buffer(this.state.address.substr(2).toString(), "hex");
      let hash = new Buffer(sha256(sha256(address)));
      let checksum = hash.slice(0, 2);
      let addressAndChecksum = Buffer.concat([address, checksum]);


      // TODO: try to encode base62 (try to encode Ethereum address)
        // Thomas says we save 1 character with base62
        // TODO: do a table a see the difference between base56 and base62
        // TODO: academic part for see the difference
        // TODo: explore between 64 and 62 58 56 and Bech32
        // TODO: Motivation --> eka address should be as shortest as possible --> checksum for avoiding copy paste typos
        // TODO: EUREKA ALphabet --> check which characters are allowed by LATEX
        // comparing pro and cons ans sizes between different bases
        // discuss prons and cons of including ORCID in the eureka address
        // PRO: you have a direct mapping between Ethereum and ORCID
        // cons: address will be longer 
      const encodedAddress = bs58.encode(addressAndChecksum);
      this.setState({ encodedAddress });
    }
  }

  render() {
    return (
      <Container>
        <Label>Ethereum Address</Label>
        <InputField
          onChange={e => {
            this.checkStatus(e.target.value);
          }}
          status={this.state.status}
          placeholder={"0xab5801a7d398351b8be11c439e05c5b3259aec9b"}
        />
        {this.state.status === "valid" ? (
          <AuthorLookup
            addresses={this.state.address}
            right={10}
            width={35}
            height={35}
            fontSize={12}
            padding={"12px"}
          />
        ) : null}
        <ConvertContainer>
          <ConvertButton
            status={this.state.status}
            onClick={async () => {
              await this.encode();
            }}
          >
            Encode
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

        {this.state.encodedAddress ? (
          <Fragment>
            <EncodingResult
              encodedAddress={this.state.encodedAddress}
              ethAddress={this.state.address}
            />
          </Fragment>
        ) : null}
      </Container>
    );
  }
}

export default Encoding;

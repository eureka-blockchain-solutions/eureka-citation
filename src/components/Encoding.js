import React, { Component } from "react";
import styled from "styled-components";
import { InputField } from "../views/design-components/Inputs";
import web3 from "web3";
import { __FIFTH } from "../helpers/colors";

const Container = styled.div``;

const ConvertButton = styled.div`
  &:hover {
    transform: scale(1.03)
  }
  transition: 0.3s all ease-in-out;
  background: ${__FIFTH};
  padding: 6px 12px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
`;

const ConvertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

class Encoding extends Component {
  constructor() {
    super();
    this.state = { status: null };
  }

  componentDidMount() {}

  checkStatus(value) {
    if (web3.utils.isAddress(value)) {
      this.setState({ status: "valid" });
    } else return this.setState({ status: "error" });
  }

  render() {
    return (
      <Container>
        <InputField
          onChange={e => {
            this.checkStatus(e.target.value);
          }}
          status={this.state.status}
          placeholder={"Enter here your Ethereum Address.."}
        />
        <ConvertContainer>
          <ConvertButton>Convert</ConvertButton>
        </ConvertContainer>
      </Container>
    );
  }
}

export default Encoding;

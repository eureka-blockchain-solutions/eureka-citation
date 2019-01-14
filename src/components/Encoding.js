import React, { Component } from "react";
import styled from "styled-components";
import { InputField } from "../views/design-components/Inputs";
import web3 from "web3";

const Container = styled.div`
  width: 600px;
  margin-top: 2em;
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
      </Container>
    );
  }
}

export default Encoding;

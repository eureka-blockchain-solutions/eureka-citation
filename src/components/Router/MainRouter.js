import React, { Component } from "react";
import styled from "styled-components";
import { Redirect, Route, withRouter } from "react-router-dom";
import Encoding from "../Encoding";
import Decoding from "../Decoding";
import OptionPicker from "../OptionPicker";
import {__GRAY_100, __GRAY_200, __GRAY_300, __THIRD} from "../../helpers/colors";
import { Separator } from "../../views/Separator";

const Container = styled.div`
  max-width: 1110px;
  min-width: 800px;
  border: 1px solid ${__GRAY_300};
  padding: 10px 30px 30px 30px;
  border-radius: 5px;
  margin-bottom: 4em;
`;

const Title = styled.h2`
  text-align: center;
`;

const MarginTop = styled.div`
  margin-top: 2em;
`;

class MainRouter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Title>What do you want to do?</Title>
        <OptionPicker
          onChange={value => {
            this.props.history.push(`/${value}`);
          }}
        />
        <Separator top={85} />
        <MarginTop>
          <Route path="/encoding" exact render={() => <Encoding />} />
          <Route path="/decoding" exact render={() => <Decoding />} />
          <Route path="/" exact render={() => <Redirect to={"/encoding"} />} />
        </MarginTop>
      </Container>
    );
  }
}

export default withRouter(MainRouter);

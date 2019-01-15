import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Encoding from "../Encoding";
import Decoding from "../Decoding";
import OptionPicker from "../OptionPicker";
import { __FIFTH, __THIRD } from "../../helpers/colors";
import { Separator } from "../../views/Separator";

const Container = styled.div`
  max-width: 1110px;
  min-width: 800px;
  padding: 0 20px;
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
        <Separator top={85}/>
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

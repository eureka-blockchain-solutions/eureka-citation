import React, { Component } from "react";
import styled from "styled-components";
import OptionPicker from "./OptionPicker";
import MainRouter from "./Router/MainRouter";
import { Switch, BrowserRouter } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

class Converter extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <MainRouter />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default Converter;

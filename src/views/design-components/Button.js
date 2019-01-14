import React from 'react';
import Ink from 'react-ink';
import styled from 'styled-components';

const MyButton = styled.button`
  position: relative;
`;

const Button = props => {
  return (
    <MyButton {...props}>
      <Ink />
      {props.children}
    </MyButton>
  );
};

export default Button;

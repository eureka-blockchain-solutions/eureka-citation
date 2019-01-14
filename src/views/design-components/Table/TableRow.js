import React from 'react';
import styled from 'styled-components';
import {__GRAY_200} from '../../../helpers/colors.js';

const MyTableRow = styled.tr`
  &:hover {
    background: ${__GRAY_200};
  }
  transition: 0.5s all;
`;

export const TableRow = props => {
  return <MyTableRow>{props.children}</MyTableRow>;
};

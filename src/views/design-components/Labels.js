import React from 'react';
import styled from 'styled-components';
import {
  __LABEL_PRIMARY_TEXT,
  __LABEL_PRIMARY_BACK
} from '../../helpers/colors.js';

const getTextColor = props => {
  if (props.status === 'primary') {
    return `${__LABEL_PRIMARY_TEXT}`;
  }
};

const getBackColor = props => {
  if (props.status === 'primary') {
    return `${__LABEL_PRIMARY_BACK}`;
  }
};
const LabelContainer = styled.div`
  padding: 0.5em 0.875em;
  text-transform: uppercase !important;
  color: ${props => getTextColor(props)};
  background-color: ${props => getBackColor(props)};
  border-radius: 10rem;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  margin-bottom: ${props => (props.bottom ? props.bottom + 'px' : null)};
  margin-left: ${props => (props.left ? props.left + 'px' : null)};
  margin-right: ${props => (props.right ? props.right + 'px' : null)};
  margin-top: ${props => (props.top ? props.top + 'px' : null)};
`;

export const Label = props => {
  return <LabelContainer {...props}>{props.children}</LabelContainer>;
};

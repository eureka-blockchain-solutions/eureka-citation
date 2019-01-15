import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  transition: 0.5s all;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  vertical-align: middle;
  margin-bottom: ${props => (props.bottom ? props.bottom + 'px' : null)};
  margin-left: ${props => (props.left ? props.left + 'px' : null)};
  margin-right: ${props => (props.right ? props.right + 'px' : null)};
  margin-top: ${props => (props.top ? props.top + 'px' : null)};
  cursor: ${props => (props.cursor ? props.cursor : 'auto')};
`;
const Avatar = props => {
    return <Img src={`/${props.avatar}`} {...props} />;
};

export default Avatar;

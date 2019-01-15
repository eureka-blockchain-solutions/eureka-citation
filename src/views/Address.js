import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AddressLink = styled(Link)`
  color: ${props => props.color};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "bold")};
  font-size: ${props => props.fontSize};
  word-break: break-all;
  text-decoration: ${props => (props.noDecoration ? "none" : null)};
`;

const Address = styled.span`
  color: ${props => props.color};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "bold")};
  font-size: ${props => props.fontSize};
  word-break: break-all;
`;

export const EthereumAddress = ({
  ethereumAddress,
  listLength,
  index,
  noLink,
  ...otherProps
}) => {
  let content = otherProps.content;
  if (!content) content = ethereumAddress;
  if (listLength && index === listLength - 2) content = content + " and ";
  else if (listLength && index !== listLength - 1) content = content + ", ";

  if (noLink) return <Address {...otherProps}>{content}</Address>;
  else
    return (
      <AddressLink to={`/app/users/${ethereumAddress}`} {...otherProps}>
        {content}
      </AddressLink>
    );
};

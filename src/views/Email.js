import React from 'react';
import styled from 'styled-components';
import {__ALERT_DANGER} from '../helpers/colors.js';

const ExternalLink = styled.a`
  color: ${__ALERT_DANGER};
  font-weight: bold;
  font-size: ${props => props.fontSize};
  text-decoration: ${props => (props.noDecoration ? 'none' : null)};
  word-break: break-all;
`;

export const Email = ({email, subject, body, ...otherProps}) => {
    if (!subject) subject = '';
    if (!body) body = '';
    return (
        <ExternalLink
            {...otherProps}
            href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
            {email}
        </ExternalLink>
    );
};

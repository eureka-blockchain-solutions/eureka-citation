import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.js';
import {__GRAY_100} from '../helpers/colors.js';
import {EthereumAddress} from './Address.js';
import {Email} from './Email.js';

const AuthorCredentials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => (props.padding !== undefined ? props.padding : '12px')};
  font-size: ${props => props.fontSize};
  border-bottom: 1px solid ${__GRAY_100};
  width: 100%;
`;

const Author = ({author, ...otherProps}) => {
    const props = otherProps;
    const fontSize = props.fontSize ? props.fontSize + 'px' : 'inherit';
    return (
        <AuthorContainer padding={props.padding} fontSize={fontSize}>
            <Avatar avatar={author.avatar} {...props} />
            <AuthorCredentials>
                {props.noAddress ? null : (
                    <EthereumAddress
                        ethereumAddress={author.ethereumAddress}
                        fontSize={fontSize}
                    />
                )}
                {props.noEmail ? null : (
                    <Email noDecoration email={author.email} fontSize={fontSize}>
                        {author.email}
                    </Email>
                )}
            </AuthorCredentials>
        </AuthorContainer>
    );
};

export default Author;

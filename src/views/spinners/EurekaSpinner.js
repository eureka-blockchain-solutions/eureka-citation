import React from 'react';
import styled, {keyframes} from 'styled-components';
import {__MAIN, __THIRD} from '../../../helpers/colors.js';

const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 ${__THIRD};
    box-shadow: 0 0 0 0 ${__THIRD};
    transform: scale(1);
    opacity: 1;
  }
  50% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        opacity: 0.3;
    transform: scale(1.2);
         
   
  }
  100% {
     -moz-box-shadow: 0 0 0 0 ${__THIRD};
    box-shadow: 0 0 0 0 ${__MAIN};
   opacity: 1;
    transform: scale(1);
  }
`;

const pulseLogo = keyframes`
   0% {
    transform: scale(1);
  }
  50% {
     transform: scale(1.2);
  }
  100% {
     transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30%;
  position: absolute;
  width: 100%;
`;

const spinner = keyframes`

  to {transform: rotate(360deg);}
`;

const Logo = styled.img`
  transition: 1s all;
  margin-left: 22px;
  animation: ${pulseLogo} 2.5s infinite linear;
  animation: ${spinner} 2s linear infinite;
`;

const EurekaLoader = styled.div`
  // animation: ${pulse} 2.5s infinite linear;
  padding: 60px 55px;
  border-radius: 50%;
`;
const EurekaSpinner = () => {
  return (
    <Container>
      <EurekaLoader>
        <Logo src="../img/logos/eureka-hd.png" width={150} height={150} />
      </EurekaLoader>
    </Container>
  );
};

export default EurekaSpinner;

import React from "react";
import styled from "styled-components";
import { LARGE_DEVICES } from "../../helpers/mobile";

const Logo = styled.img`
  ${LARGE_DEVICES`
      width: ${props => props.width / 1.3}px;
  `};
  height: ${props => (props.height ? props.height + "px" : "auto")};
  width: ${props => (props.width ? props.width + "px" : null)};
  display: ${props => (props.app ? "none" : "flex")};
  margin-bottom: ${props => (props.bottom ? props.bottom + "px" : null)};
  margin-left: ${props => (props.left ? props.left + "px" : null)};
  margin-right: ${props => (props.right ? props.right + "px" : null)};
  margin-top: ${props => (props.top ? props.top + "px" : null)};
`;

const renderLogo = props => {
  if (props.blue) {
    return <Logo src="/img/logos/eureka-blue.png" {...props} />;
  }
  if (props.blueNoLogo) {
    return <Logo src="/img/logos/eureka-blue-no-logo.png" {...props} />;
  }
  if (props.white) {
    return <Logo src="/img/logos/eureka-white.png" {...props} />;
  }
  return <Logo src="/img/logos/eureka.svg" {...props} />;
};

const EurekaLogo = props => {
  return <div>{renderLogo(props)}</div>;
};

export default EurekaLogo;

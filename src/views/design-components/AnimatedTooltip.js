import React from 'react';
import styled from 'styled-components';
import {__FIFTH, __GRAY_200} from '../../helpers/colors.js';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Element = styled.span`
  display: inline;
  width: inherit;
`;

const ToolTip = styled.span`
  opacity: ${props => (props.isActive ? 1 : 0)};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: opacity 600ms, visibility 600ms;
  z-index: 100000;
  position: absolute;
  padding: 15px;
  background: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);
  border-radius: 4px;
  color: ${__FIFTH};
`;

const ToolTipTitle = styled.h3`
  margin-top: 0;
  padding-bottom: 8px;
  color: ${__FIFTH};
  border-bottom: 1px solid ${__GRAY_200};
`;

// for right and left --> height needed
// for top and bottom --> width needed
const getStyle = (position, height, width) => {
  switch (position) {
    case 'right':
      return {left: '105%', top: `${-(height / 2)}px`};

    case 'left':
      return {right: '105%', top: `${-(height / 2)}px`};

    case 'bottom':
      return {
        left: '50%',
        top: '100%',
        marginLeft: `${-(width / 2)}px`,
        marginTop: '10px'
      };
    case 'top':
      return {
        left: '50%',
        bottom: '100%',
        marginLeft: `${-(width / 2)}px`,
        marginBottom: '10px'
      };
    default:
      return null;
  }
};

class AnimatedTooltip extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  componentDidMount() {}

  toggle() {
    const isActive = !this.state.isActive;
    this.props.isVisible(isActive);
    this.setState({isActive});
  }

  render() {
    return (
      <Container isActive={this.state.isActive}>
        <ToolTip
          isActive={this.state.isActive}
          style={getStyle(
            this.props.position,
            this.props.height ? this.props.height : 'auto',
            this.props.width ? this.props.width : 'auto'
          )}
        >
          {this.props.noTitle ? null : (
            <ToolTipTitle>{this.props.title}</ToolTipTitle>
          )}

          {this.props.content}
        </ToolTip>
        <Element
          onMouseEnter={() => this.toggle()}
          onMouseLeave={() => this.toggle()}
        >
          {this.props.children}
        </Element>
      </Container>
    );
  }
}

export default AnimatedTooltip;

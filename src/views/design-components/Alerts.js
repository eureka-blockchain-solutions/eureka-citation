import React, {Component} from 'react';
import styled from 'styled-components';
import {
  __ALERT_DANGER,
  __ALERT_ERROR,
  __ALERT_INFO,
  __ALERT_SUCCESS,
  __ALERT_WARNING
} from '../../helpers/colors.js';
import Icon from '../../views/icons/Icon.js';

const getColor = props => {
  if (props.color) {
    return props.color;
  }
  if (props.status === 'success') {
    return `${__ALERT_SUCCESS}`;
  }
  if (props.status === 'info') {
    return `${__ALERT_INFO}`;
  }
  if (props.status === 'warning') {
    return `${__ALERT_WARNING}`;
  }
  if (props.status === 'danger') {
    return `${__ALERT_DANGER}`;
  }
  if (props.status === 'error') {
    return `${__ALERT_ERROR}`;
  }
};

const getIcon = props => {
  const marginRight = 20;
  const iconSize = props.iconSize;
  if (props.status === 'success') {
    return (
      <Icon
        icon={'thumbs-up'}
        width={iconSize}
        height={iconSize}
        right={marginRight}
      />
    );
  }
  if (
    props.status === 'info' ||
    props.status === 'warning' ||
    props.status === 'danger'
  ) {
    return (
      <Icon
        icon={'bell'}
        width={iconSize}
        height={iconSize}
        right={marginRight}
      />
    );
  }

  if (props.status === 'error') {
    return (
      <Icon
        icon={'exlamation-circle'}
        width={iconSize}
        height={iconSize}
        right={marginRight}
      />
    );
  }
};
const Container = styled.div`
  color: #fff;
  border-color: ${props => getColor(props)};
  background-color: ${props => getColor(props)};
  font-size: 0.875rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  transition: 0.5s ease-in-out;
  display: ${props => (props.isHidden ? 'none' : 'flex')};
`;

const Element = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const First = styled(Element)`
  justify-content: flex-start;
`;

const Second = styled(Element)`
  flex: 25;
`;

const Third = styled(Element)`
  justify-content: flex-end;
`;

class Alert extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false
    };
  }

  hideAlert() {
    this.setState({isHidden: true});
  }

  render() {
    const iconSize = this.props.iconSize || 25;

    return (
      <div>
        <Container isHidden={this.state.isHidden} {...this.props}>
          <First>{getIcon(this.props)}</First>{' '}
          <Second>{this.props.children}</Second>
          <Third>
            <Icon
              onClick={() => this.hideAlert()}
              icon={'reject'}
              width={iconSize}
              height={iconSize}
              left={8}
              color={'white'}
            />
          </Third>
        </Container>
      </div>
    );
  }
}

export default Alert;

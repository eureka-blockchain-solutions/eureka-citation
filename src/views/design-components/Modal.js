import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import Icon from '../../views/icons/Icon.js';
import {PANEL_LEFT_NORMAL_WIDTH} from '../../helpers/layout.js';
import {__FIFTH, __THIRD} from '../../helpers/colors.js';

const getBackColor = props => {
  if (props.type === 'notification') {
    return `linear-gradient(87deg,${__FIFTH} 0,${__THIRD} 100%)!important`;
  }
  return '#fff';
};

const getFontColor = props => {
  if (props.type === 'notification') {
    return `#fff`;
  }
};
const ModalParent = styled.div`
  position: fixed;
  z-index: 1050;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  transition: opacity 0.15s linear;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

const modalFade = keyframes`
 from {transform: translateY(-50%);opacity: 0;}
  to {transform: translateY(0);opacity: 1;}
`;

const MyModal = styled.div`
  min-height: 250px;
  max-width: 700px;
  min-width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: ${props => (props.noLeftPanel ? 0 : PANEL_LEFT_NORMAL_WIDTH)}px;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  outline: 0;
  background: ${props => getBackColor(props)};
  background-clip: padding-box;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 15px 35px 0px,
    rgba(0, 0, 0, 0.17) 0px 5px 15px 0px;
  animation-name: ${modalFade};
  transform: translate(0, 0);
  transition: ${modalFade} 0.5s ease-out;
  animation-duration: 0.5s;
  z-index: 1072;
  position: relative;
  width: auto;
  border: 0;
  color: ${props => getFontColor(props)};
`;

const MyModalHeader = styled.div`
  display: flex;
  padding: 1.25rem;
  border-bottom: ${props =>
    props.type === 'notification' ? null : '1px solid #e9ecef'};
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  align-items: flex-start;
  justify-content: space-between;
`;

const MyModalBody = styled.div`
  position: relative;
  padding: 1.5rem;
  flex: 1 1 auto;
`;

const MyModalFooter = styled.div`
  display: flex;
  padding: 1.5rem;
  border-top: ${props =>
    props.type === 'notification' ? null : '1px solid #e9ecef'};
  align-items: center;
  justify-content: flex-end;
`;

const ModalTitle = styled.h4`
  margin-bottom: 0;
  margin-top: 0;
`;

const CloseButton = styled.div`
  letter-spacing: 1.5px;
  cursor: pointer;
`;

const Content = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 1.6;
  word-break: break-word;
  text-align: center;
`;

const ActionButton = styled.div`
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  cursor: pointer;
  margin: 0 0 0 auto;
  color: ${__THIRD};
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 0.625rem 1.25rem;
  transition: 0.5s all;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

class Modal extends Component {
  toggle() {
    const isShowed = !this.props.show;
    this.props.toggle(isShowed);
  }

  render() {
    return (
      <div>
        {this.props.show ? (
          <ModalParent {...this.props} show={this.props.show}>
            <MyModal {...this.props}>
              {this.props.hideHeader ? null : (
                <MyModalHeader {...this.props}>
                  <ModalTitle>{this.props.title}</ModalTitle>
                  {this.props.noClose ? null : (
                    <Icon
                      icon={'close'}
                      width={10}
                      height={18}
                      onClick={() => this.toggle()}
                    />
                  )}
                </MyModalHeader>
              )}

              <MyModalBody>
                {this.props.type === 'notification' && !this.props.noBell ? (
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Icon
                      icon={'bell'}
                      width={40}
                      height={40}
                      top={10}
                      bottom={20}
                    />
                  </div>
                ) : null}
                <Content>{this.props.children}</Content>
              </MyModalBody>
              {this.props.hideFooter ? null : (
                <MyModalFooter {...this.props}>
                  {this.props.noClose ? null : (
                    <CloseButton onClick={() => this.toggle()}>
                      CLOSE
                    </CloseButton>
                  )}
                  {this.props.action ? (
                    <ActionButton onClick={() => this.props.callback()}>
                      {this.props.action}
                    </ActionButton>
                  ) : null}
                </MyModalFooter>
              )}
            </MyModal>
          </ModalParent>
        ) : null}
      </div>
    );
  }
}

export default Modal;

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { style } from '../utils';

const { flex, media } = style;

class Main extends Component {
  componentDidMount() {
    // make user info request here using the user Id + JWT in header!
    const { requestUser, user } = this.props;
    requestUser(user.userId);
  }

  render() {
    if (!this.props.user.first_name) {
      return null;
    }
    return (
      <Wrapper>
        Hola, <Emphasis>{this.props.user.first_name}!</Emphasis>
      </Wrapper>
    );
  }
}

export default Main;

const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  font-size: 1.5em;
  animation: 1s ${fadeInFromTop} ease;
`;

const Emphasis = styled.span`
  font-weight: 500;
`;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { style } from '../utils';

const { flex, media } = style;

const Welcome = () => (
  <Wrapper>
    <Logo className="fa fa-angle-double-up" />
    <Title>P E X</Title>
    <Tagline>if you stay ready, you ain't gotta get ready</Tagline>
    <ButtonWrapper>
      <PillButton invert>register</PillButton>
      <PillButton>login</PillButton>
    </ButtonWrapper>
  </Wrapper>
);

export default Welcome;

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

const delayFade = keyframes`
  0% {opacity: 0}
  20% {opacity: 0}
  40% {opacity: 0}
  60% {
    opacity: 0;
    transform: translateY(-10px);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {opacity: 1}
`;

const Wrapper = styled.div`
  ${flex('column', 'center', 'center')}
  font-size: 8em;
  font-weight: 100;
  margin: 0;
  text-align: center;
  animation: 1s ${fadeInFromTop} ease;
`;

const Logo = styled.i`
  color: #62DCA5;
  font-size: 1.5em;
`;

const Title = styled.div`
  margin-top: -0.3em;
  font-weight: 300;
`;

const Tagline = styled.div`
  font-size: 0.2em;
`;

const ButtonWrapper = styled.div`
  ${flex('row', 'space-around', 'center')}
  width: 70%;
  margin: 0.5em 0;
  animation: 1s ${delayFade} linear;
`;

const PillButton = styled.button`
  outline: none;
  border-radius: 20px;
  font-size: 0.2em;
  padding: 0.2em 0.7em;
  cursor: pointer;
  border: 2px solid white;
  background-color: ${props => (props.invert ? 'white' : 'transparent')};
  color: ${props => (props.invert ? props.theme['bg-color'] : 'white')};
`;

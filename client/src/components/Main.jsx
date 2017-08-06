import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { style, constants } from '../utils';

const { hello } = constants;
const { flex, media } = style;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'hello',
    };
  }
  componentWillMount() {
    // make user info request here using the user Id + JWT in header!
    const { requestUser, user } = this.props;
    requestUser(user.userId);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        view: 'weight',
      });
    }, 2500);
  }

  render() {
    const { view } = this.state;

    if (!this.props.user.first_name) {
      return null;
    }
    return (
      <Wrapper>
        {view === 'hello' &&
          <Greeting>
            {hello[Math.floor(Math.random() * hello.length)]}
            ,
            {' '}
            <Emphasis>{this.props.user.first_name}!</Emphasis>
          </Greeting>}

        {view === 'weight' &&
          <Greeting>{'Please input your weight now:'}</Greeting>}
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
`;

const Greeting = styled.div`
  animation: 1s ${fadeInFromTop} ease;
`;

const Emphasis = styled.span`
  font-weight: 500;
`;

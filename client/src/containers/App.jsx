import React, { Component } from 'react';
import styled from 'styled-components';
import { style } from '../utils';
import { Welcome } from '../components';

const { flex, media } = style;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Welcome />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  ${flex('column', 'center', 'center')}
  background-color: ${props => props.theme['bg-color']};
  font-family: ${props => props.theme['font-main']};
  font-weight: ${props => props.theme['font-weight']};
  color: white;

  width: 100vw;
  height: 100vh;
`;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { style } from '../utils';

import { login } from '../actions/auth';
import { Welcome } from '../components';

const { flex, media } = style;

class App extends Component {
  render() {
    return (
      <Wrapper>
        {!this.props.isAuthenticated
          ? <Welcome requestLogin={this.props.requestLogin} />
          : <div>Hola, {this.props.user.name}!</div>}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  selected_view: state.ui.selected,
});

const mapDispatchToProps = dispatch => ({
  requestLogin: creds => dispatch(login(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Wrapper = styled.div`
  ${flex('column', 'center', 'center')}
  background-color: ${props => props.theme['bg-color']};
  font-family: ${props => props.theme['font-main']};
  font-weight: ${props => props.theme['font-weight']};
  color: white;
  
  user-select: none;

  width: 100vw;
  height: 100vh;
`;

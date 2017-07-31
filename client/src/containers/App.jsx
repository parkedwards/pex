import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { style } from '../utils';

import { login, fetchUser } from '../actions/auth';
import { Welcome, Main } from '../components';

const { flex, media } = style;

// turn this into a stateless fnl component
class App extends Component {
  render() {
    return (
      <Wrapper>
        {!this.props.isAuthenticated
          ? <Welcome requestLogin={this.props.requestLogin} />
          : <Main
            user={this.props.user}
            requestUser={this.props.requestUser}
          />}
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
  requestUser: userId => dispatch(fetchUser(userId)),
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

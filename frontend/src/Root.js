import React from 'react';
import { connect } from 'react-redux';
import Navigation from './components/router/Router';
import {
  screenResize,
  handleInput,
  login,
  logout,
  register,
  verifyToken,
} from './actions';

class Root extends React.Component {
  componentDidMount() {
    this.props.verifyToken();
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  updateDimensions() {
    this.props.screenResize(window.innerWidth);
  }
  render() {
    return <Navigation {...this.props} />
  }
}

const mapStateToProps = ({ app, user }) => ({
  app,
  user,
});

const mapDispatchToProps = {
  screenResize,
  handleInput,
  login,
  logout,
  register,
  verifyToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

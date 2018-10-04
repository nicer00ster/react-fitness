import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        Account
        <button onClick={() => this.props.logout()}>Logout</button>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import EnhancedAppBar from './EnhancedAppBar';
import EnhancedWrapper from './EnhancedWrapper';
import styles from './styles';

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <EnhancedAppBar
          logout={this.props.logout}
          chat={this.props.chat}
          activeUsers={this.props.user.activeUsers}
          focusedUser={this.props.focusedUser} />
        <EnhancedWrapper>

        </EnhancedWrapper>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Dashboard);

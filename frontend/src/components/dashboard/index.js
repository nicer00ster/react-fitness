import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EnhancedAppBar from './EnhancedAppBar';
import EnhancedWrapper from './EnhancedWrapper';

import styles from './styles';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      hidden: false,
    };
  }

  handleVisibility() {
    this.setState({ open: false, hidden: !this.state.hidden })
  };

  handleClick() {
    this.setState({ open: !this.state.open });
  };

  handleOpen() {
    if(!this.state.hidden) {
      this.setState({ open: true });
    }
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;
    return (
      <React.Fragment>
        <EnhancedAppBar
          logout={this.props.logout}
          chat={this.props.chat}
          activeUsers={this.props.user.activeUsers}
          focusedUser={this.props.focusedUser} />
        <EnhancedWrapper>
          <div className={classes.root}>
            <SpeedDial
              ariaLabel="Quick Action Bar"
              className={classes.speedDial}
              hidden={hidden}
              icon={<SpeedDialIcon openIcon={<EditIcon />} />}
              onBlur={() => this.handleClose()}
              onClick={() => this.handleClick()}
              onClose={() => this.handleClose()}
              onFocus={() => this.handleOpen()}
              onMouseEnter={() => this.handleOpen()}
              onMouseLeave={() => this.handleClose()}
              open={open}>
              {actions.map(action => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={this.handleClick}
                />
              ))}
            </SpeedDial>
          </div>
        </EnhancedWrapper>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Dashboard);

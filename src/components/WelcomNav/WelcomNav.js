import { Divider, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./WelcomNave.styles";
import { ReactComponent as NotificationIcon } from '../../resources/icons/notification.svg';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
}))(Badge);

const WelcomNav = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.welcomNavBar}>
        <div className={classes.welcomeContainer}>
          <Typography className={classes.welcomeHeader} >Welcome</Typography>
          <Typography className={classes.subHeader} >Your current sales auction and activity.</Typography>
        </div>
        <div className={classes.notifications}>
          <IconButton>
            <StyledBadge badgeContent={3} color="secondary">
              <NotificationIcon className={classes.notify} />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default WelcomNav;

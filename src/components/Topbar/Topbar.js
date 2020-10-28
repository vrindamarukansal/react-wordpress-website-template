import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import styles from "../../assets/jss/components/topbarStyle.js";
import TopbarLinks from './TopbarLinks'
const useStyles = makeStyles(styles);


export default function Topbar(props) {
  const classes = useStyles();
  React.useEffect(() => {
  });
  const appBarClasses = classNames({
    [classes.appBar]: true,
  });
  return (
    <Hidden smDown implementation="css">
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
          <TopbarLinks/>
      </Toolbar>
    </AppBar>
    </Hidden>
  );
}

Topbar.propTypes = {
    rightLinks: PropTypes.node,
};

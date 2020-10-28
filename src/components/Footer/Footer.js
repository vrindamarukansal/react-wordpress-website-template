/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const footerClasses = classNames({
    [classes.footer]: true,
  });
  const aClasses = classNames({
    [classes.a]: true,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
       <Grid container className="d-flex">
        <Grid item xs={12}>
        <span>Copyright 2020 © Company Name</span>
        <a href="http://www.mywebsite.com" style={{float:"right"}}className={aClasses}>Created by Vrinda</a>
        </Grid>
       </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};

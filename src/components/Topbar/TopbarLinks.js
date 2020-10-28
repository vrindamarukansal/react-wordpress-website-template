/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {policyUrl,careerUrl} from '../../utils/routes'
import { Link } from "react-router-dom";
import styles from "../../assets/jss/components/topbarLinksStyle.js";
const useStyles = makeStyles(styles);

export default function TopbarLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
            className={classes.navLink}
            color="transparent"
            to={policyUrl}
        >
            Privacy Policy
        </Link>    
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
            className={classes.navLink}
            color="transparent"
            to={careerUrl}
        >
            Careers
        </Link>    
      </ListItem>
    </List>
  );
}

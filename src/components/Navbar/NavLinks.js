/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../Common/CustomDropdown.js";
import Button from "../Common/Button.js";
import {homeUrl, aboutUrl, blogUrl, productsUrl} from '../../utils/routes'
import styles from "../../assets/jss/components/navLinksStyle.js";
//import { apihome } from "../../utils/API.js";

const useStyles = makeStyles(styles);

export default function NavLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={homeUrl}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          Home
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to={aboutUrl} className={classes.dropdownLink}>
            About Us
          </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={productsUrl}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          Products
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={blogUrl}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          Blog
        </Button>
        </Link>
      </ListItem>
    </List>
  );
}

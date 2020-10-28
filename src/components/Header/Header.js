import React from 'react'
import PropTypes from 'prop-types'
import Parallax from '../Common/Parallax'
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header (props){
    const classes = useStyles();
    const {caption, imgUrl}= props
    return(
        <div>
        <Parallax className={classes.headerImg} filter small image={imgUrl}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 offset-sm-1 text-center">
                        <div className={classes.headerCaption} dangerouslySetInnerHTML = {{__html: caption }}/>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>
    )
}

Header.propTypes = {
    caption: PropTypes.string,
    imgUrl: PropTypes.string
}

Header.defaultProp = {
    imgUrl: require('../../assets/img/banner.jpg'),
    caption: "My Company website"
}

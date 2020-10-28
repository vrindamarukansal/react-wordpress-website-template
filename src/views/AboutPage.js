import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Testimonials from "../components/Common/Testimonials"
import headerImage from "../assets/img/banner.jpg"
import Header from "../components/Header/Header"
import BookDemo from "../components/Common/BookDemo"
import Loading from '../components/Common/Loading'
import { withStyles, createStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/views/aboutStyles"
import {ABOUT_API, apihome} from '../utils/API'

const useStyles= createStyles(styles)

class AboutPage extends Component {
    state ={
            isLoaded: false,
            pageContent: [],
        };

    componentDidMount(){
        axios.get(ABOUT_API)
            .then(res=> this.setState({
                pageContent: res.data,
                isLoaded:true,
            }))
            .catch(err => console.log(err))
    }

 
    render(){
        const {pageContent, isLoaded}= this.state;
        const { classes } = this.props;
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              autoplay: 0,
              loop:1,
              modestbranding:1,
              rel:0,
            },
          };
        if(isLoaded){
        //Convert relative URLs to absolute
        const mainContent= pageContent.content.rendered.replace(/\/wp-content/g,`${apihome}wp-content`)
        return(
            <div>
                <Header imgUrl={headerImage} caption={pageContent.title.rendered} />
                <div className="main">
                    <div className="section">
                        <div className="container">
                            <div className={classes.about} dangerouslySetInnerHTML = {{__html: mainContent }}/>
                        </div>
                    </div>
                    <div className={"section "+classes.primaryBg}>
                        <div className="container">
                            <div className="row ">
                                <Testimonials/>
                            </div>
                        </div>
                    </div>
                    <BookDemo/>
                </div>
            </div>
        )
        }
        else {
            return(
                <Loading/>
            )
        }
    }
}

AboutPage.propTypes={
    classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(AboutPage)
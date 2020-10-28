import React, { Component } from 'react'
import axios from 'axios'
import HomeCarousel from "../components/Common/HomeCarousel"
import Testimonials from "../components/Common/Testimonials"
import BookDemo from "../components/Common/BookDemo"
import YouTube from 'react-youtube'
import Loading from '../components/Common/Loading'
import { withStyles, createStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/views/aboutStyles"
import {HOME_API,apihome} from  '../utils/API'

const useStyles= createStyles(styles)

class HomePage extends Component {
    state ={
        isLoaded: false,
        pageContent: [],
    };

    componentDidMount(){
        axios.get(HOME_API)
            .then(res=> this.setState({
                pageContent: res.data,
                isLoaded:true,
            }))
            .catch(err => console.log(err))
    }
    render(){
    const {pageContent, isLoaded}= this.state;
    const { classes } = this.props;

    //options for youtube video
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
    if (isLoaded){
    //change relative URLs to Absolute
    const mainContent= pageContent.content.rendered.replace(/\/wp-content/g,`${apihome}wp-content`)
    return (
        //Page layout- Carousel->Intro->Youtube vide->Testimonials->Book Demo Form
        <div>
            <HomeCarousel/>
            <div>
                <div className="section">
                    <div className="container text-center"> 
                        <div className="pb-4 col-xs-12 col-sm-10 offset-sm-1" 
                        dangerouslySetInnerHTML = {{__html: mainContent }}/>
                        <h1>How it works</h1>
                        <hr className="underline"/>
                        <div className="col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 mt-5">
                            <YouTube videoId="nhRIvp3d-7E" opts={opts} onReady={this._onReady}
                            className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded
                                } />
                        </div>
                    </div>
                </div>
                <div className="slant-grayBg">
                    <div className="section-slantTop-bg">
                        <Testimonials/>        
                    </div>
                </div>
                <BookDemo/>
            </div>
        </div>    
    ) }
    else {
        return <Loading/>
    }
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default withStyles(useStyles)(HomePage)


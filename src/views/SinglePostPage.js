import React, { Component } from 'react'
import axios from 'axios'
import * as moment from 'moment'
import PropTypes from 'prop-types'
import Loading from '../components/Common/Loading'
import { withStyles, createStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/components/blogStyles"
import {BLOG_API, apihome} from '../utils/API'

const useStyles= createStyles(styles)

class SinglePostPage extends Component {
    state ={
            isLoaded: false,
            post:[],
        }; 

    componentDidMount(){
        const postid=this.props.location.search.replace('?','')
        axios.get(BLOG_API+'/'+postid+'/?_embed')
            .then(res=> this.setState({
                post: res.data,
                isLoaded:true
            }))
           .catch(err => console.log(err))
    }

 
    render(){
        const {post, isLoaded}= this.state;
        const { classes } = this.props;
        if(isLoaded){
        //change relative urls to absolute    
        const mainContent= post.content.rendered.replace(/\/wp-content/g,`${apihome}wp-content`)
        const author= post._embedded['author'][0].name
        //we set up a custom field for author photo because wordpress default was not working
        const avatar= post._embedded['author'][0].acf.profilePhoto
        return(
            <div>
                <div className="section ">
                    <div className="container">
                        <h2 dangerouslySetInnerHTML={{__html:post.title.rendered}}/>
                        <div className="d-flex mt-3">
                            <div> 
                                <img src={apihome+avatar} alt='author' 
                                className={
                                    classes.avatar+" "+
                                    classes.imgRoundedCircle}/>
                            </div>
                            <div>
                                <strong>{author}</strong>
                                <p className={classes.postMeta}>{moment(post.date).format('LL')}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className={classes.content+" justify-content-center"} 
                        dangerouslySetInnerHTML={{__html:mainContent}}/>
                    </div>
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

SinglePostPage.propTypes={
    classes: PropTypes.object.isRequired,
    postid: PropTypes.number
}

export default withStyles(useStyles)(SinglePostPage)
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import * as moment from 'moment'
import PropTypes from 'prop-types'
import Loading from '../Common/Loading'
import Card from '../Card/Card'
import CardBody from '../Card/CardBody'
import Button from '../Common/Button'
import { withStyles, createStyles} from "@material-ui/core/styles";
import Person from '@material-ui/icons/Person'
import CalendarToday from '@material-ui/icons/CalendarToday'
import {apihome} from '../../utils/API'
import styles from "../../assets/jss/components/blogStyles"
import { blogUrl } from '../../utils/routes'
const useStyles= createStyles(styles)

const BlogPost= (props)=>{
    const {id}= props
    const { classes } = props;
    const [postData, setPostData]=useState([])
    const [isLoaded, setLoaded]=useState(false)
    useEffect(() => {
        axios.get(`/wp-json/wp/v2/posts/${id}/?_embed`)
        .then(res=> {
            setPostData(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    },[id])

    if(isLoaded){
    const mediaUrl= postData._embedded['wp:featuredmedia'][0].source_url
    const author= postData._embedded['author'][0].name
    const externalLink=postData.acf.externalLink
    const {title, date, excerpt, slug }=postData
    return(
        <Card className="d-flex my-5 row">
            {(mediaUrl)&&(
            <CardBody className="col-xs-12 col-sm-4">
            <img src={apihome+mediaUrl} 
                    alt="featured-media"
                    className={classes.cardImage}/>
            </CardBody>
            )}
            <CardBody className="col-xs-12 col-sm-8">
                <h3 dangerouslySetInnerHTML={{__html:title.rendered}} className="mt-0"/>
                <div className={classes.postMeta+" mb-2"}>
                    <span className="mr-3"><Person/> {author} </span> 
                    <span><CalendarToday/> {moment(date).format('LL')}</span>
                </div>
                <div dangerouslySetInnerHTML ={{__html:excerpt.rendered}}/>
                {externalLink? <Button color='primary' href={externalLink} target="_blank">Read More</Button>:
                <Link to={blogUrl+'/'+slug+'?'+id}><Button color='primary'>Read More</Button></Link>}
            </CardBody>
        </Card>
    )}
    else{
        return <Loading/>
    }
}

BlogPost.propTypes={
    author: PropTypes.number,
    excerpt: PropTypes.string,
    title: PropTypes.string,
    media: PropTypes.number,
    date: PropTypes.string,
    id:PropTypes.number,
    slug:PropTypes.string,
}

export default withStyles(useStyles)(BlogPost);
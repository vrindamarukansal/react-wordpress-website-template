import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Loading from '../components/Common/Loading'
import BlogPost from '../components/Blog/BlogPost'
import Pagination from '../components/Blog/Pagination'
import { withStyles, createStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/components/blogStyles"
import {BLOG_API} from '../utils/API'

const useStyles= createStyles(styles)

const Blog = (props)=> {
    const [posts, setPosts]= useState([])
    const [isLoaded, setIsLoaded]= useState(false)
    const [totalPages, setTotalPages]= useState([])
    let currentPage=parseInt(props.location.search.replace('?',''))
    if(!currentPage) currentPage=1
    const {classes}=props
    useEffect(()=>{
        axios.get(BLOG_API+'?per_page=8&page='+currentPage) //API to get 8 posts in order for current page
            .then(res=> {
                setTotalPages([...Array(parseInt(res.headers['x-wp-totalpages'])).keys()]) //get total pages from API response header
                setPosts(res.data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }, [currentPage]) //Run useEffect everytime current page changes
    if(isLoaded){
    return (
        <div className="main">
            <div className={"section "+classes.grayBg}>
                <div className="container">
                    {posts.map((post)=>(
                        <BlogPost   key={post.id}
                                    id={post.id}
                        />
                    ))}
                    {(totalPages.length>1)&&(
                    <Pagination totalPages={totalPages} currentPage={currentPage}/>
                    )}
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

Blog.propTypes={
    classes: PropTypes.object.isRequired,

}

export default withStyles(useStyles)(Blog)
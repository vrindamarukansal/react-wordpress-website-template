import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Loading from '../components/Common/Loading'
import { withStyles, createStyles} from "@material-ui/core/styles";
import styles from "../assets/jss/views/productStyles"
import {PRODUCTS_API, PRODUCTS_PAGE_API, apihome} from '../utils/API'

const useStyles= createStyles(styles)

const Devices= (props)=> {
    const [isLoaded, setLoaded]= useState(false)
    const [pageContent,setPageContent]= useState([]) //Contains an overview of comapnies products
    const [products, setProducts]= useState([]) //The products themselves
    const {classes}= props
    useEffect(()=>{
        const getProducts= axios.get(PRODUCTS_API+`&categories=${props.cat}`);
        const getProductsPage= axios.get(PRODUCTS_PAGE_API)
        // A use case where you'd want response of two API endpoints to be received before loading a page
        Promise.all([getProducts, getProductsPage]).then(res=>{
            setProducts(res[0].data)
            setPageContent(res[1].data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    },[props])
        if(isLoaded){
        return(
            <div>
                <div className={"section"}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h1 dangerouslySetInnerHTML={pageContent.title.rendered}/>
                            <p dangerouslySetInnerHTML={{__html:pageContent.content.rendered}}/>
                        </div>
                        <div className="row">
                            {products.map((product, key)=>(
                                <div key={key} 
                                        className={"d-inline-block col-xs-12 col-sm-6 col-md-4 mb-5 "+classes.product}>
                                    <div className={classes.productImage+" "+classes.imgRaised +" " +
                                                    classes.imgRounded + " " +classes.imgFluid}>
                                        <img src={apihome+product._embedded['wp:featuredmedia'][0].source_url}
                                                alt="featuredMedia"/>  
                                    </div> 
                                    <div dangerouslySetInnerHTML={{__html:product.content.rendered}}/>

                                </div>
                                    
                            ))}
                        </div>
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

Devices.propTypes={
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Devices)
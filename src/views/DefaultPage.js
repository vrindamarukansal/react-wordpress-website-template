import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Common/Loading'
import Header from "../components/Header/Header"
import BookDemo from "../components/Common/BookDemo"
import {CAREERS_API,POLICY_API, apihome} from '../utils/API'
import {careerUrl, policyUrl} from '../utils/routes'

const ServiceDefault=(props)=>{
    const [isLoaded, setLoaded]=useState(false)
    const [pageContent, setPageContent]= useState([])
    const url= props.location.pathname
    useEffect(() => {
        let api=null
        //switch to load page according to URL. Because this is a default template it can be used for many pages
        switch(url){
            case careerUrl:
                api=CAREERS_API; break;
            case policyUrl:
                api=POLICY_API; break;
            default:
                window.location.href='/error'
        }
        axios.get(api)
            .then(res=> {
                setPageContent(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [url])

    if(isLoaded){
        const mainContent= pageContent.content.rendered.replace(/\/wp-content/g,`${apihome}wp-content`)
        return(
            //Assuming Advanced custom field plugin is used to create a header image for every page
            <div>
                {(pageContent.acf.headerImage)&&(
                <Header imgUrl={apihome+pageContent.acf.headerImage} caption={pageContent.title.rendered}/>
                )}

                <div className={"main "+url}>
                    <div className="section">
                        <div className="container">
                            <div dangerouslySetInnerHTML = {{__html: mainContent }}/>
                        </div>
                    </div>
                    <div className="grayBg">
                        <BookDemo/>
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


export default ServiceDefault
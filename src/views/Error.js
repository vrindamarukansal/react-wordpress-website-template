import React from 'react'
import Parallax from "../components/Common/Parallax"
import headerImage from "../assets/img/banner.jpg"
import Button from '../components/Common/Button'

const Error = (props)=>{
        return(
            <Parallax filter image={headerImage}>
            <div className="container">
                <h1 style={{color:"#fff"}}>This page doesn't exist</h1>
                <Button color='primary'
                        onClick={()=>{props.history.goBack();}}>Go Back</Button>
                
            </div>
        </Parallax>
        )
    }

export default Error
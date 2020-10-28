import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from "react-slick";
import{TESTIMONIALS_API, apihome} from '../../utils/API'
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/carouselStyle";

const useStyles = makeStyles(styles);

export default function Testimonials () {
    const classes = useStyles();
    const [testimonials, setTestimonials]= useState([])
    const [isLoaded, setIsLoaded]=useState(false)
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed:7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
      };

    useEffect(()=>{
        axios.get(TESTIMONIALS_API)
        .then(res=> {
            setTestimonials(res.data)
            settings.slidesToShow= testimonials.length
        })
        .catch(err=> console.log(err))
        setIsLoaded(true)
    },[])

    if (isLoaded){
        return (
            <div className="container">
            <Carousel {...settings}>
            {testimonials.map((testimonial, key)=>(
            <div className="mb-5 px-1">
                {(testimonial.acf.authorImage)&&(
                    <div className='row'>
                        <div className='col-xs-12 col-md-2 mb-3'>
                            <img
                                src={apihome+testimonial.acf.authorImage}
                                alt="..."
                                className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded
                                }
                                style={{maxWidth:"150px",height:'auto'}}
                            />
                        </div>
                        <div className="col-sm-12 col-md-10 text-left pl-3 font-20">
                            <p className="blockquotes" dangerouslySetInnerHTML = {{__html: testimonial.content.rendered}}/>
                            <hr className="underline" style={{marginLeft:"0"}}/>
                            <p dangerouslySetInnerHTML = {{__html: testimonial.acf.author}}/>
                        </div>
                    </div>
                )}
            {!(testimonial.acf.authorImage)&&(    
                <div className="row">
                    <div className="col-12 text-left pl-3 font-20">
                    <p className="blockquotes" dangerouslySetInnerHTML = {{__html: testimonial.content.rendered}}/>
                    <hr className="underline" style={{marginLeft:"0"}}/>
                    <p dangerouslySetInnerHTML = {{__html: testimonial.acf.author}}/>
                    </div>
                </div>
            )}
            </div>
            ))}
            </Carousel>
            </div>
        )
    }
    else {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

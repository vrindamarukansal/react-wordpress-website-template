import React from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import image1 from "../../assets/img/slide-1.jpg";
import image2 from "../../assets/img/slide-2.jpg";
import image3 from "../../assets/img/slide-3.jpg";

import styles from "../../assets/jss/components/carouselStyle";

const useStyles = makeStyles(styles);

export default function HomeCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed:7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.homeCarousel}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h1>Caption for slide 1</h1>
                    </div>
                </div>
                <div>
                  <img
                    src={image3}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h1>Caption for slide 2</h1>
                  </div>
                </div>
                <div>
                  <img src={image2} alt="Third slide" className="slick-image" />
                  <div className="slick-caption text-left">
                    <h1>Caption for slide 3</h1>
                 </div>
                </div>
              </Carousel>
          </Grid>
        </Grid>
    </div>
  );
}

import React from "react";
//import classNames from "classnames";
//import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar/Navbar.js";
import HeaderLinks from "../components/Navbar/NavLinks.js"
import Topbar from "../components/Topbar/Topbar.js"
import TopbarLinks from "../components/Topbar/TopbarLinks.js"
import Footer from "../components/Footer/Footer.js";


const DefaultLayout = ({ children}) => (
    <div>
        <Topbar
            rightLinks={<TopbarLinks/>}/>
        <Navbar
        brand="Menu"
        rightLinks={<HeaderLinks />}
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
        {children}
      <Footer/>
    </div>
    
);

export default DefaultLayout;
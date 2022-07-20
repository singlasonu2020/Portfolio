import React from 'react';
import NavBar from './component/NavBar';
import SocialMedia from "./component/SocialMedia";
import SideDot from "./component/SideDot";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Certificates from "./component/Certificates";
import ContactUs from "./component/ContactUs";




import "./Portfolio.css";


function Portfolio()
{

    return(
        <div>
            <NavBar/>
            <div className="ContaintBar">
                <Home/>
                <Skills/>
                <Education/>
                <Projects/>
                <Certificates/>
                <ContactUs/>
            </div>
            <SocialMedia/>
            <SideDot/>
       
             
  
        </div>
    )

}

export default Portfolio;
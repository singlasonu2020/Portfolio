import React, { useEffect } from 'react';
import "./Education.css";
import logo from "../Image/college_logo.png";


function Education()
{
    useEffect(()=>{

        const ele = document.getElementById("Education");
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            document.getElementById(`SideDotEducation`).style.color="#5EBEC4";
            document.getElementById("EducationTitle").style.animationName="Title";
          }
          else
          {
            document.getElementById(`SideDotEducation`).style.color="rgb(257,257,257,0.1)";
            document.getElementById("EducationTitle").style.animationName="";
          }
        }, {
          threshold: 0.1
        });
    
        observer.observe(ele);
      })


    return(
        <div id="Education" className="Education">
            <span id ="EducationTitle" className='EducationTitle'>education</span>
            <div className="EducationComponent">
                <div className='EducationHeading'>Education</div>
                <div className='EducationDetails'>
                  <div className="NameOfClass">B.Tech in Computer Engineering</div>
                  <img src={logo} className="CollegeLogo"/>
                  <div id="CollegeName" className="CollegeName" onClick={()=>{window.location.href = `http://ipu.ac.in/usict/`;}}>UNIVERSITY SCHOOL OF INFORMATION, COMMUNICATION & TECHNOLOGY,Delhi</div>
                  <div className="CurrentDetail">
                   <span className="YearOfCollege">2020-Present</span>
                   <span className="CGPA">8.783 CGPA</span>
                  </div>
                </div>
            </div>

        </div>

    )
}

export default Education;
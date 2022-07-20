import React, { useEffect } from 'react';
import "./Home.css";


function LandingComponent()
{
    useEffect(()=>{

        const ele = document.getElementById("Home");
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            document.getElementById(`SideDotHome`).style.color="#5EBEC4";
          }
          else
          {
            document.getElementById(`SideDotHome`).style.color="rgb(257,257,257,0.1)";
          }
        }, {
          threshold: 0.1
        });
    
        observer.observe(ele);
      })

    return(
        <div id="Home" className="Home">
        <div className='HomeContainer'>
            <div className='HomeName'><span className='HomeNameSpan'>Howdy,</span>I'm Sonu Singla</div>
            <div className='HomeBranch'>Computer Engineer <span className="HomeNameSpan">(B.Tech)</span></div>
            <div className='AboutUsHeading'>About Me</div>
            <div className='AboutUs'>
            I'm a software engineer from India who loves to build stuff that interacts with data and the internet.
            </div>
            <div  className="DownloadCV" onClick={()=>{OpenCV()}}>Resume</div>
           
        </div>
        </div>
    )
}
function OpenCV()
{
  window.location.href ="/sonu_singla_cv.pdf";

}

export default LandingComponent;
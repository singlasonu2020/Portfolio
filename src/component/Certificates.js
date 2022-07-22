import React, { useEffect } from 'react';
import "./Certificates.css";

function Certification()
{
    useEffect(()=>{

        const ele = document.getElementById("Certificates");
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            document.getElementById(`SideDotCertificates`).style.color="#5EBEC4";
            if(window.innerWidth>500 && window.innerHeight>500)
            {
              document.getElementById("CertificatesTitle").style.animationName="Title";
            }
            
          }
          else
          {
            document.getElementById(`SideDotCertificates`).style.color="rgb(257,257,257,0.1)";
            document.getElementById("CertificatesTitle").style.animationName="";
          }
        }, {
          threshold: 0.1
        });
    
        observer.observe(ele);
  })


    return(
        <div id="Certificates" className="Certificates">
            <span id ="CertificatesTitle" className='CertificatesTitle'>certificates</span>
            <div className='CertificatesComponent'>
                <div className='CertificationHeading'>Certificates</div>
                
                <div className='Certificate'>
                    <div className='CertificateName' onClick={()=>{OpenCertificate()}}>Data Structure and Algorithms in JAVA</div>
                    <span className='CertificateNameSpan'>Check Certificate</span>
                    <div className='CertificateDescription'>Completed a Data structures and algorithm oriented course with 92.6% accuracy. Completed 16 assessment and around 200 problems.</div>
                    <div className="DurationAndIsuedtBy">
                        <div className='CertificateDuration'>06/2021 - 10/2021</div>
                        <div className='CertificateIssuedBy'><a href='https://www.codingninjas.com/'>Coding Ninja</a></div>
                    </div>
                    
                </div>

            </div>


        </div>

    )
}

function OpenCertificate() 
{
  window.location.href ="/sonu_singla_DSA_certificate.pdf";
}

export default Certification;
import React from 'react';
import "./SideDot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


function SideDot()
{
    return(
        <div id="SideDot">
             
             <FontAwesomeIcon id="SideDotHome" onClick={()=>{OnClickEventSideDot("Home" )}} className='SideDotDotIcon' icon={faCircle} />
             <FontAwesomeIcon id="SideDotSkills" onClick={()=>{OnClickEventSideDot("Skills")}}  className='SideDotDotIcon' icon={faCircle} />
             <FontAwesomeIcon id="SideDotEducation"onClick={()=>{OnClickEventSideDot("Education")}}  className='SideDotDotIcon' icon={faCircle} />
             <FontAwesomeIcon id="SideDotProjects" onClick={()=>{OnClickEventSideDot("Projects")}} className='SideDotDotIcon' icon={faCircle} />
             <FontAwesomeIcon id="SideDotCertificates" onClick={()=>{OnClickEventSideDot("Certificates")}} className='SideDotDotIcon' icon={faCircle} />
             <FontAwesomeIcon id="SideDotContactUs" onClick={()=>{OnClickEventSideDot("ContactUs")}} className='SideDotDotIcon' icon={faCircle} />
             
        </div>

    )
}


function OnClickEventSideDot(Id)
{
   
    console.log(Id);
    window.location.href = `#${Id}`;

}

export default SideDot;
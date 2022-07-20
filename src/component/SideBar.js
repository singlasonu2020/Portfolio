import React,{useEffect} from 'react';
import logo from "../Image/logo.png";
import "./SideBar.css";


function SideBar()
{
    useEffect(()=>{
        setTimeout(() => {
          window.addEventListener('click',OnClickAnyWhereWhenSideBarIsOpen)
    
        }, 1)}
      );

    return(

        <div className="SideBar">
             <img src={logo} className="SideBarLogo"/>
            <ul>
                
                <li onClick={()=>{OnClickEventSideBar("Home")}}>Home</li>
                <li onClick={()=>{OnClickEventSideBar("Skills")}}>Skills</li>
                <li  onClick={()=>{OnClickEventSideBar("Education")}}>Eduction</li>
                <li onClick={()=>{OnClickEventSideBar("Projects")}}>Projects</li>
                <li onClick={()=>{OnClickEventSideBar("Certificates")}}>Certificates</li>
                <li onClick={()=>{OnClickEventSideBar("ContactUs")}}>Contact Us</li>
            </ul>
        </div>
    )

}

function OnClickAnyWhereWhenSideBarIsOpen(e){
    if (!document.getElementById('SideBarDiv').contains(e.target)){
        CloseSideBar();
    } 
}

function OnClickEventSideBar(Id)
{
   
    window.location.href = `#${Id}`;
    CloseSideBar();

}


function CloseSideBar()
{
    
     document.getElementById("SideBarDiv").innerHTML="";
     window.removeEventListener('click',OnClickAnyWhereWhenSideBarIsOpen);

}
export default SideBar;
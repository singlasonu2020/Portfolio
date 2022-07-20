import React,{ useRef } from 'react';
import "./NavBar.css";
import logo from "../Image/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideBar from "./SideBar";
import ReactDOM from 'react-dom/client';




function NavBar()
{
  const NavBarBars = useRef();
    return(
        <div className='NavBar'>
             <div className ="LogoWithName">
             <img src={logo} className="NavBarLogo"/>
             <h1 className='NavBarLogoName'>SONU SINGLA</h1>
             </div>
             <div className='NavBarContacts'>
                <h3 className="NavBarContactsDetails"><a href="tel:9660415904">+91 966-041-5904</a></h3>/<h3  className="NavBarContactsDetails"><a href="mailto:singlasonu.net@gmail.com"> singlasonu.net@gmail.com</a></h3>
             </div>
             <FontAwesomeIcon id="NavBarBars" ref={NavBarBars} className='NavBarBars' icon={faBars} onClick={()=>{OpenSideBar()}}/>
             <div id="SideBarDiv"></div>
        </div>
    )
}

function OpenSideBar(data)
{
  const root = ReactDOM.createRoot(document.getElementById('SideBarDiv'));
  root.render(<SideBar />);
}

export default NavBar;
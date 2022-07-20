import React from 'react';
import "./SocialMedia.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function SocialMedia()
{
    return(
        <div className='SocialMedia'>
            <a href="https://www.linkedin.com/in/sonu-singla-b33969213/" className='SocialMediaIcon'><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href="https://github.com/singlasonu2020" className='SocialMediaIcon'><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.facebook.com/somu.singla.92" className='SocialMediaIcon'><FontAwesomeIcon icon={faFacebookF}/></a>
            <a href="https://wa.me/+919660415904" className='SocialMediaIcon'><FontAwesomeIcon icon={faWhatsapp}/></a>
        </div>
    )
    

}

export default SocialMedia;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "./Project.css";

function Project(data)
{
    return(

        <div className='project'>
            <section className="ProjectLeftSide">
                <div className="ProjectProjectLeftSideDiUpperName">{data.ProjectName.split(" ").map(ProjectName)}</div>
                <div className='ProjectLeftSideDiUpper'>
                </div>
                
            </section>
            <div className='ProjectRightSide'>
                <div className="ProjectLinks">
                    <FontAwesomeIcon className="ProjectsLinkIcons" onClick={()=>{OpenLink(data.Link)}} icon={faLink}/>
                    <FontAwesomeIcon  className="ProjectsLinkIcons"  onClick={()=>{OpenLink(data.GitLink)}}   icon={faGithub}/>
                </div>
                <div className='ProjectDescription'>
                {data.Description}
                </div>
                <div className="TechStackUse">
                {data.StackUse}
                </div>
            </div>
        
        </div>
        
    )
}


function OpenLink(TempLink)
{
    window.location.href = TempLink;
    return;
}


function ProjectName(Value ,index)
{
    if(index%2==0)
    {
        return (Value+" ");
    }
    else
    {
        return(<span className="ProjectNameSpan" >{Value +" "}</span>);

    }

}


export default Project;
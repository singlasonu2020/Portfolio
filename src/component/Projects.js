
import React, { useEffect } from 'react';
import Project  from "./Project";
import "./Projects.css";


function Projects()
{
    useEffect(()=>{

        const ele = document.getElementById("Projects");
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            document.getElementById(`SideDotProjects`).style.color="#5EBEC4";
            if(window.innerWidth>500 && window.innerHeight>500)
            {
              document.getElementById("ProjecTtitle").style.animationName="Title";
            }
           

          }
          else
          {
            document.getElementById(`SideDotProjects`).style.color="rgb(257,257,257,0.1)";
            document.getElementById("ProjecTtitle").style.animationName="";

          }
        }, {
          threshold: 0.1
        });
    
        observer.observe(ele);
      })



      const Projects =[
        {
          ProjectName:"College Buddy",
          Description:"College Buddy is interactive application provides all the college workflow management. It's has a streamlined UI for College, Professor and Students to stay connected and functional.",
          StackUse:"HTML, CSS, JavaScript, Node JS, MYSQL, AWS(ec2)",
          GitLink:"https://www.w3schools.com/jsref/jsref_split.asp",
          Link:"https://www.w3schools.com/jsref/jsref_split.asp"
        },
        {
          ProjectName:"Restaurant Management System",
          Description:"Its a web application intended to assist with the tasks associated with the day-to-day management of a restaurant",
          StackUse:"React JS, CSS, Node JS, MYSQL, AWS(ec2)",
          GitLink:"",
          Link:""
        }

      ]




    return(
        <div id="Projects" className='projects'>
        
        <span id="ProjecTtitle" className='ProjecTtitle'>projects</span>
            <div className='projectsComponent'>
            
                <div className='ProjectsHeading'>Some things I've built<hr  className='ProjectsHeadingSpan'/></div>
                <div className="projectsproject">
                    <Project ProjectName={Projects[0].ProjectName} Description={Projects[0].Description} StackUse={Projects[0].StackUse} GitLink={Projects[0].GitLink}  Link={Projects[0].Link}/>
                    <Project ProjectName={Projects[1].ProjectName} Description={Projects[1].Description} StackUse={Projects[1].StackUse} GitLink={Projects[1].GitLink}  Link={Projects[1].Link}/>

                </div>
            </div>

        </div>
    )



}


export default Projects;
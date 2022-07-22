
import React, { useEffect } from 'react';
import "./Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';


function Skills()
{
  useEffect(()=>{

    const ele = document.getElementById("Skills");
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.getElementById(`SideDotSkills`).style.color="#5EBEC4";
        if(window.innerWidth>500 && window.innerHeight>500)
        {
          document.getElementById("SkillTitle").style.animationName="Title";

        }
        
      }
      else
      {
        document.getElementById(`SideDotSkills`).style.color="rgb(257,257,257,0.1)";
        document.getElementById("SkillTitle").style.animationName="";
      }
    }, {
      threshold: 0.1
    });

    observer.observe(ele);

  })
  
    return(
        <div id="Skills" className='Skills'>
        
        <span id="SkillTitle" className='SkillTitle'>my skills</span>
            <div className='SkillComponent'>
            
                <div className='SkillHeading'>Skills</div>
                <div className="SkillSkills">
                   
                   <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faJava}/>
                      <h6 className='SkillName'>JAVA</h6>
                    </div>
                    <div className="SkillSkill">
                      <h3 className='SkillIcon'>C++</h3>
                      <h6  className='SkillName'>C++</h6>
                    </div>

                    <div className="SkillSkill">
                      <h3 className='SkillIcon'>DSA</h3>
                      <h6  className='SkillName'>DATA STRUCTURES AND ALGORITHMS</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faHtml5}/>
                      <h6  className='SkillName'>HTML</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faCss3}/>
                      <h6  className='SkillName'>CSS</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faJs}/>
                      <h6  className='SkillName'>JAVASCRIPT</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faReact}/>
                      <h6  className='SkillName'>React JS</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faNode}/>
                      <h6  className='SkillName'>NODE JS</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faDatabase}/>
                      <h6  className='SkillName'>DATABASE(MYSQL, MONGODB)</h6>
                    </div>

                    <div className="SkillSkill">
                      <FontAwesomeIcon className='SkillIcon' icon={faAws}/>
                      <h6  className='SkillName'>AWS(ec2)</h6>
                    </div>

                    <div className="SkillSkill">
                      <h3 className='SkillIcon'>LEADERSHIP</h3>
                      <h6  className='SkillName'>LEADERSHIP</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Skills;
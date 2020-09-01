import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';

import Background from '../../assets/images/kom-i-tid/header.png';

import kit01 from '../../assets/images/kom-i-tid/kit01.png';
import kit02 from '../../assets/images/kom-i-tid/kit02.png';
import kit03 from '../../assets/images/kom-i-tid/kit03.png';
import kit04 from '../../assets/images/kom-i-tid/kit04.png';
import kit05 from '../../assets/images/kom-i-tid/kit05.png';
import kit06 from '../../assets/images/kom-i-tid/kit06.png';
import kit07 from '../../assets/images/kom-i-tid/kit07.png';
import kit08 from '../../assets/images/kom-i-tid/kit08.png';
import kit09 from '../../assets/images/kom-i-tid/kit09.png';



const KomITid = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="kom-i-itd" className="projectSection">

            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">Kom i tid</h1>
            <div className="content contentWidth">
                <div>
                    <h2>About the project</h2>
                    <p>
                    Young adults with special needs due to different diagnoses need help to plan their day outside of their home because they have problems with appointments, clothing and directions.<br />
                    It is interesting to see how technology can help disabled people in their daily life.<br />
                    We designed, together with the knowledge of Occupational Therapy students, a mobile application prototype which will help the people in interest.<br />
                    It will use the mobile sensors and AR technology to adapt and personalize the user experience.<br />
                    Personalisation refers to the manner in which an application provides the ‘right’ information for the ‘right’ user at the ‘right’ time and in the ‘right’ way.
                    </p>
                    <p>
                    The prototype was a school project for the course <span style={{fontStyle: "italic"}}>Interactivity in Smart Environments</span> at Umeå University.<br />
                    </p>
                </div>
                <div>
                    <h2>PROTOTYPE</h2>
                    <p>The final prototype was presented to Västerbotten County Council, which really appreciated the idea and the result.</p>
                </div>
                <div className="content-grid-images">
                    <img className="colImg" src={kit01} alt="kit01"/>
                    <img className="colImg" src={kit02} alt="kit02"/>
                    <img className="colImg" src={kit03} alt="kit03"/>
                    <img className="colImg" src={kit04} alt="kit04"/>
                    <img className="colImg" src={kit05} alt="kit05"/>
                    <img className="colImg" src={kit06} alt="kit06"/>
                    <img className="colImg" src={kit07} alt="kit07"/>
                    <img className="colImg" src={kit08} alt="kit08"/>
                    <img className="colImg" src={kit09} alt="kit09"/>

                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>Working with co-workers who have a limited technical background, or none at all, has been very instructive. Both how I can help them understand my view of the project, but also how they can help me gain a better understanding of the theoretical parts of users' needs.</p>
                    <p>In addition to the user's needs, designing prototypes and having the technical aspects in mind was an important part of this project.</p>
                </div>
                
            </div>            
        </section>
        <ProjectsSmall id={"kom-i-tid"}/>
        </>
    )
};

export default KomITid;
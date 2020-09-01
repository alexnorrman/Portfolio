import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';

import Background from '../../assets/images/idag-inatt/header.png';
import idag1 from '../../assets/images/idag-inatt/idag1.png';
import idag2 from '../../assets/images/idag-inatt/idag2.png';
import idag3 from '../../assets/images/idag-inatt/idag3.png';




const IdagInatt = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="idag-inatt" className="projectSection">

            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">Idag &amp; Inatt</h1>
            <div className="content contentWidth">
                <div>
                    <h2>About the project</h2>
                    <p>IDag &amp; Inatt is an inspiring day for students who studies Interaction and Design at Umeå University, with invited companies that are relevant to the education. I was a part of the Public Relations group for the Idag &amp; Inatt 2018. I was, together with another co-worker, the Front-End Developer who revised and improved the already existing website for the event to match this year's theme, Moulin Rouge.</p>
                </div>
                
                <div>
                    <img className="colImg" src={idag1} alt="start"/>
                </div>
                <p></p>
                <div className="content-grid-images">
                    <img className="colImg" src={idag3} alt="idag3"/>
                    <img className="colImg" src={idag2} alt="idag2"/>
                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>Moulin Rouge is a very spectacular and dramatic theme. To try to convey this feeling, JavaScript was used to make the windmill rotate and give the sky the stars. Something that developed my knowledge in JavaScript and what can be done with HTML Canvas.</p>
                    <p>During this project, it was the first time I came across PHP and the Laravel framework. Although the PHP solution was already implemented, I solved some bugs that were found during the development of the new site and implemented some minor functionalities.</p>
                    <p>This was my first experience working within a larger project as well as my first experience as a member of the Public Relations department. which contributed to a very good experience that I will benefit from in future projects.</p>
                </div>
            </div>
        </section>
        <ProjectsSmall id={"idag-och-inatt"}/>
        </>
    )
};

export default IdagInatt;
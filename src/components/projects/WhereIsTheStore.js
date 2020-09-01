import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';


import Background from '../../assets/images/where-is-the-store/header.png';
import Lofi1 from '../../assets/images/where-is-the-store/whereLofi1.png';
import Lofi2 from '../../assets/images/where-is-the-store/whereLofi2.png';
import Lofi3 from '../../assets/images/where-is-the-store/whereLofi3.png';
import Lofi4 from '../../assets/images/where-is-the-store/whereLofi4.png';
import Lofi5 from '../../assets/images/where-is-the-store/whereLofi5.png';
import wits01 from '../../assets/images/where-is-the-store/wits01.png';
import wits02 from '../../assets/images/where-is-the-store/wits02.png';
import wits03 from '../../assets/images/where-is-the-store/wits03.png';
import wits04 from '../../assets/images/where-is-the-store/wits04.png';
import wits05 from '../../assets/images/where-is-the-store/wits05.png';
import wits06 from '../../assets/images/where-is-the-store/wits06.png';
import wits07 from '../../assets/images/where-is-the-store/wits07.png';
import wits08 from '../../assets/images/where-is-the-store/wits08.png';
import wits09 from '../../assets/images/where-is-the-store/wits09.png';


const WhereIsTheStore = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="whereisthestore" className="projectSection">

            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">Where is the store</h1>
            <div className="content contentWidth">

            <h2>About the project</h2>
            <p>
            We saw a problem with how to navigate around the big shopping malls.
            </p>
            <p>
            For this project, we first asked ourselves 3 questions:<br />
            <span style={{fontStyle: "italic"}}>"How does it work today?"</span><br />
            <span style={{fontStyle: "italic"}}>"Could we improve the user experience?"</span><br />
            <span style={{fontStyle: "italic"}}>"Is AR technology something that we could use to help the user?"</span>
            </p>
            <p>
            Our idea is to use the phone's camera along with AR technology to show the way to the store. Scan a QR-code to get the final destination. Using WPS (Wi-Fi Positioning System) to find the location of the user.
            </p>
            <p>
            The prototype was a school project for the course <span style={{fontStyle: "italic"}}>UI/UX Design(Capstone design)</span> at Sogang University.<br />
            </p>
                <div>
                    <h2>Research</h2>
                    <p>Before we started sketching our solution, we investigated what types of techniques would be used and an online survey was done to see if there was interest in an AR solution.</p>
                    <p>The survey showed that the majority were interested in an AR solution and had used AR in other types of applications at some point.</p>
                    <p>We observed how the current maps of the mall worked. There we noticed that after using a map, users were still confused about which direction to go.</p>
                    <p>After this, we decided to give this AR solution a try.</p>
                </div>
                <div>
                    <h2>LO-FI PROTOTYPE</h2>

                </div>
                <div className="content-grid-images">
                    <img className="colImg" src={Lofi1} alt="whereLofi1"/>
                    <img className="colImg" src={Lofi2} alt="whereLofi2"/>
                    <img className="colImg" src={Lofi3} alt="whereLofi3"/>
                    <img className="colImg" src={Lofi4} alt="whereLofi4"/>
                    <img className="colImg" src={Lofi5} alt="whereLofi5"/>
                </div>

                <div>
                    <h2>Hi-Fi Prototype</h2>
                </div>
                <div className="content-grid-images">
                    <img className="colImg" src={wits01} alt="wits01"/>
                    <img className="colImg" src={wits02} alt="wits02"/>
                    <img className="colImg" src={wits03} alt="wits03"/>
                    <img className="colImg" src={wits04} alt="wits04"/>
                    <img className="colImg" src={wits05} alt="wits05"/>
                    <img className="colImg" src={wits06} alt="wits06"/>
                    <img className="colImg" src={wits07} alt="wits07"/>
                    <img className="colImg" src={wits08} alt="wits08"/>
                    <img className="colImg" src={wits09} alt="wits09"/>

                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>In this project, there was a great focus on the underlying technical factors to make such an application work. To investigate whether the solution would actually work both technically but also if there was an interest among the users.</p>
                    <p>They gave me a greater insight into the creation of prototypes, just with that in mind. The prototype, which was created in Sketch, gave me additional experience with that software. I also developed my knowledge and experience in identifying problems through user observations.</p>
                </div>
            </div>            
        </section>
        <ProjectsSmall id={"where-is-the-store"}/>
        </>
    )
};

export default WhereIsTheStore;
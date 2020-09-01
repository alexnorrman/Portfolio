import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';

import Background from '../../assets/images/act-react/header.png';
import actreact from '../../assets/images/act-react/actreact.mp4';



const ActReact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="actReact" className="projectSection">
        <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">A Personal Object</h1>
            <div className="content contentWidth">
                <div>
                    <h2>ABOUT THE PROJECT</h2>
                    <p>The assignment was to animate Jill and Jack. Using the 12 principles of animation, the animations should be an action with a counter reaction.</p>
                    <p>
                        This was a school project for the course <span style={{fontStyle: "italic"}}>3D Animation Studio</span> at Sogang University.<br />
                    </p>
                </div>
                <div>

                    <video style={{width:"100%"}} controls muted>
                        <source src={actreact} type="video/mp4"/>
                        Your browser does not support HTML video.
                    </video>
                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>Extended knowledge about the 12 principles of animation aswell as Autodesk Maya.</p>
                    <p>This project was later on selected for the exhibition of the Sogang University, 2018.</p>
                </div>
            </div>      
        </section>
        <ProjectsSmall id={"action-and-reaction"}/>
        </>
    )
};

export default ActReact;
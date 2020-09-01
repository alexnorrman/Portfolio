import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';

import Background from '../../assets/images/personal-object/header.png';
import p20pro5 from '../../assets/images/personal-object/p20pro-5.png';
import p20pro6 from '../../assets/images/personal-object/p20pro-6.png';




const PersonalObject = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="personalObject" className="projectSection">
            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">A Personal Object</h1>
            <div className="content contentWidth">
                <div>
                    <h2>ABOUT THE PROJECT</h2>
                    <p>The assignment was to model a personal object. Something you can observe and touch to use as a physical template. I decided to model my Huawei P20 Pro.</p>
                    <p>
                        This was a school project for the course <span style={{fontStyle: "italic"}}>3D Modeling Studio</span> at Sogang University.<br />
                    </p>
                </div>
                <div>
                    <img className="colImg" src={p20pro5} alt="p20pro5"/>
                    <p></p>
                    <img className="colImg" src={p20pro6} alt="p20pro6"/>
                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>This was my first project ever for modeling as well as first time using Autodesk Maya. I learned the hard way, that you really need to control your edge loops and edge flow and this is definitly something I am going to keep in mind for future modeling projects.</p>
                </div>
            </div>      
        </section>
        <ProjectsSmall id={"a-personal-object"}/>
        </>
    )
};

export default PersonalObject;
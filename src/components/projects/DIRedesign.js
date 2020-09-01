import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';

import Background from '../../assets/images/di-redesign/header.png';
import finalPDF from '../../assets/images/di-redesign/finalPDF.pdf';




const DIRedesign = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="di-redesign" className="projectSection">

            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">DI.se Redesign</h1>
            <div className="content contentWidth">
                
                <h2>About the project</h2>
                <p>
                The project was about evaluating an existing website or service and then making design improvements accordingly. Me and my group looked into <a target="_blank" href="https://www.di.se/" rel="noopener noreferrer">Dagens Industri</a>.
                We conducted tests and evaluated the site to find the current possible problems that the site had. Then we continued to create mockups for a new version of the site.
                </p>
                <p>
                This was a school project for the course <span style={{fontStyle: "italic"}}>Human-Computer Interaction with Emphasis on Cognition and Design</span> at Umeå University.<br />
                </p>


                <div>
                    <h2>The PROCESS</h2>
                    <p>Initially, usability tests were performed with observations and interviews. In total, we tested 20 users.</p>
                    <p>We also conducted heuristic evaluation on the already existing website.</p>
                    <p>When we identified the problems, we first made Lo-Fi paper sketches of what the structure of the newly designed page would look like. Once this was decided, the final one created the final Hi-Fi prototype.</p>
                </div>

                <div>
                    <h2>Design changes</h2>
                    <p>Our goal was to make the existing design cleaner, smoother and easier to understand.</p>
                    <p>The original design was of three columns with different structures, which proved difficult to follow. We changed this to two, more consistent, columns to make it easier for users to access the relevant information.<br />
                    Articles were also assigned a color coding to make it easier to get an overview of the page and its content.</p>
                    <p>It all results in a more easy to read and spacious flow. We also put a focus on making it clearer what was actually an ad and not.</p>
                    <p>We also changed the header to a sticky header that only shows the menu bar when scrolling. This causes a larger portion of the news feed to appear on the screen.</p>
                </div>
                <div>
                    <h2>Final prototype</h2>
                    <object data={finalPDF} type="application/pdf" style={{width:"100%", height:"80vh"}}>
                        <p><a href={finalPDF}>Final prototype</a></p>
                    </object>
                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>During this project, I have developed my techniques in both usability tests and heuristic evaluation. <br />
                        With a special focus on improving already existing services.</p>
                </div>
            </div>
        </section>
        <ProjectsSmall id={"di-redesign"}/>
        </>
    )
};

export default DIRedesign;
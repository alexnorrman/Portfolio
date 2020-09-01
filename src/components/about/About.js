import React, { useEffect } from 'react';
import StickyImages from '../projects/StickyImages';
import AboutSVG from "./AboutSVG";
import '../projects/Projects.css';

import a1 from '../../assets/images/about/a01.png';
import a2 from '../../assets/images/about/a02.png';
import pdfCV from '../../assets/images/about/Alex_Norrman_CV.pdf';
import CVimg from '../../assets/images/about/pdfCV.png';

/*

*/
const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const images = [

        {id: 0, name: "a1", img: a1, offset: window.innerHeight*(5/4)},
        {id: 0, name: "a2", img: a2, offset: window.innerHeight*(6/4)},
    ];

    return(
        <section id="about" className="projectSection">
            <AboutSVG />
            <h1 className="contentWidth">About me</h1>
            <div className="content contentWidth">
                <div className="">
                    <p>My name is Alex. I'm an UX designer and fullstack developer born in Östersund, currently living in Stockholm.</p>
                    
                    <p>I love designing and building stuff! <br />I have knowledge of the entire design process. The whole way from identifying problems/needs to a final tested prototype. <br /> But hey! I also have good knowledge of Front- and Back-End development!</p>
                    <p>When I'm not creating stuff, I love being out in the nature. Where hiking and scuba diving are close to my heart</p>
                    <p>Please, do not hesitate to contact me! </p>
                    <div className="side-content-grid">
                        <div>
                            <p style={{fontWeight:"bold"}}>Send me an email..</p>
                            <p><a href="mailto:alexnorrman@gmail.com">alexnorrman@gmail.com</a></p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>..or give me a call!</p>
                            <p>(+46)708777177</p>
                        </div>
                    </div>
                    <p>I hope that I get the chance to tell you more about myself! :)</p>
                    <h2>EXPERIENCE</h2>
                    <div className="side-content-grid">
                        <div>
                            <p style={{fontWeight:"bold"}}>Nov 2019 - Mar 2020</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Might and Delight</p>
                            <p>Master Thesis</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Mar 2019 - Oct 2019</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Umeå Energi</p>
                            <p>Innovation Ambassador</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Oct 2017 - May 2018</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Idag &amp; Inatt</p>
                            <p>Member of the PR-group &amp; Front-End Developer</p>
                            <p style={{fontStyle:"italic"}}>(Voluntary work)</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Jun 2012 - Jul 2013 </p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Loxysoft</p>
                            <p>Customer Service &amp; Database Management</p>
                        </div>
                    </div>
                    <h2>EDUCATION</h2>
                    <div className="side-content-grid">
                        <div>
                            <p style={{fontWeight:"bold"}}>2015 - 2020</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Master of Science in Interaction Technology &amp; Design</p>
                            <p>Umeå University, Umeå</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Sep 2018 - Dec 2018</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Exchange studies</p>
                            <p>Sogang University, Seoul</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>2007 - 2010</p>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>Technology Program in Computer Engineering &amp; Projects</p>
                            <p>Jämtlands Gymnasium, Östersund</p>
                        </div>
                    </div>
                    <p></p>
                    <div style={{textAlign:"center",margin:"auto"}}>
                        <p style={{fontWeight:"bold"}}>Psst! You can download my résumé below!</p>
                        <a  href = {pdfCV} target = "_blank" rel="noopener noreferrer">
                            <img style={{border: "1px solid black", maxWidth:"300px"}}  src={CVimg} alt={"CVimg"}></img>
                        </a>
                    </div>
                        
                </div>
                
                <StickyImages className="StickyImages" images={images}/>
            </div>

            
        </section>
    )
    
};

export default About;
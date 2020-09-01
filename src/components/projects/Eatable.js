import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';


import Background from '../../assets/images/eatable/Header.png';
import designprocess2 from '../../assets/images/eatable/designprocess2.jpg';
import designprocess3 from '../../assets/images/eatable/designprocess3.jpg';
import moodboard from '../../assets/images/eatable/moodboard.png';
import colorfont from '../../assets/images/eatable/colorfont.png';
import marvel from '../../assets/images/eatable/marvel.png';
import eatable0 from '../../assets/images/eatable/eatable0.png';
import eatable1 from '../../assets/images/eatable/eatable1.png';
import eatable2 from '../../assets/images/eatable/eatable2.png';
import eatable3 from '../../assets/images/eatable/eatable3.png';
import eatable4 from '../../assets/images/eatable/eatable4.png';
import eatable5 from '../../assets/images/eatable/eatable5.png';
import eatable6 from '../../assets/images/eatable/eatable6.png';
import eatable7 from '../../assets/images/eatable/eatable7.png';
import eatable8 from '../../assets/images/eatable/eatable8.png';
import eatable9 from '../../assets/images/eatable/eatable9.png';
import eatable10 from '../../assets/images/eatable/eatable10.png';
import eatable11 from '../../assets/images/eatable/eatable11.png';
import eatable12 from '../../assets/images/eatable/eatable12.png';
import eatable13 from '../../assets/images/eatable/eatable13.png';
import eatable14 from '../../assets/images/eatable/eatable14.png';

const Eatable = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    

    return(
        <>
        <section id="eatable" className="projectSection">

            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">Eatable</h1>
            <div className="content contentWidth">

            <h2>About the project</h2>
            <p>
            When I moved to Seoul I found out that some restaurants will not serve you if you are alone. New to the city with limited friends gave birth to the idea of EATABLE.
            </p>
            <p>
            With EATABLE you can find restaurants nearby, get a review of the places and see if someone is willing to let you join them at their table. You can open up your table to others to join. This way you can find places to eat and learn about the local cuisine at the same time as you get to know new friends
            
            </p>
            <p>
            The prototype was a school project for the course <span style={{fontStyle: "italic"}}>UI/UX Design(Capstone design)</span> at Sogang University.<br />
            </p>


                <div>
                    <h2>INITIAL PROCESS</h2>
                    <p>It all started with the project team (consisting of me and three other students) brainstorming together to identify needs and problems.</p>
                    
                </div>

                <div className="content-grid">
                    <div>
                        <h3>USER PERSPECTIVE:</h3>
                        <p style={{fontStyle: "italic"}}>
                        “How can the user find other users to dine with?”
                        </p>
                        <ul>
                            <li>Finding a restaurant</li>
                            <li>Finding each other</li>
                        </ul>
                    </div>
                    <div>
                        <h3>CORE FEATURES:</h3>
                        <ul>
                            <li>Finding an open table</li>
                            <li>Opening a table</li>
                            <li>A feed with reviews of restaurants nearby</li>
                            <li>A map with restaurants and open tables</li>
                        </ul>
                    </div>
                    <div>
                        <h3>SCENARIOS:</h3>
                        <ul>
                            <li>One person wants to eat Korean BBQ, finds a table to join and share with a group</li>
                            <li>A group opens a table to find more people to eat and hang out with.</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h2>LO-FI PROTOTYPE</h2>
                    <p>With help of a created flowchart, papers, pens and Post-Its we created a Lo-Fi prototype. This became a interactive Lo-Fi prototype using the <a target="_blank" href="https://marvelapp.com/" rel="noopener noreferrer">Marvel</a> application. The interactive prototype was used for usability testing. The interactive prototype was used for usability testing. After discovered usability problems had been corrected, we proceeded with the process.</p>
                    
                </div>
                <div className="content-grid">
                    <img className="colImg" src={designprocess2} alt="designprocess2"/>
                    <img className="colImg" src={designprocess3} alt="designprocess3"/>
                    <img className="colImg" src={marvel} alt="marvel"/>
                </div>
                <div>
                    <h2>Styling</h2>
                    <p>We created moodboards and decided on a color theme and fonts. We also created some icon concepts.</p>
                </div>
                <div className="content-grid">
                    <img className="colImg" src={moodboard} alt="moodboard"/>
                    <img className="colImg" src={colorfont} alt="colorfont"/>
                </div>

                <div>
                    <h2>Hi-Fi Prototype</h2>
                    <p>Finally, a Hi-Fi prototype was also created, which was then presented to the remaining course participants.</p>
                </div>
                <div className="content-grid-images">
                    <img className="colImg" src={eatable0} alt="eatable0"/>
                    <img className="colImg" src={eatable1} alt="eatable1"/>
                    <img className="colImg" src={eatable2} alt="eatable2"/>
                    <img className="colImg" src={eatable3} alt="eatable3"/>
                    <img className="colImg" src={eatable4} alt="eatable4"/>
                    <img className="colImg" src={eatable5} alt="eatable5"/>
                    <img className="colImg" src={eatable6} alt="eatable6"/>
                    <img className="colImg" src={eatable7} alt="eatable7"/>
                    <img className="colImg" src={eatable8} alt="eatable8"/>
                    <img className="colImg" src={eatable9} alt="eatable9"/>
                    <img className="colImg" src={eatable10} alt="eatable10"/>
                    <img className="colImg" src={eatable11} alt="eatable11"/>
                    <img className="colImg" src={eatable12} alt="eatable12"/>
                    <img className="colImg" src={eatable13} alt="eatable13"/>
                    <img className="colImg" src={eatable14} alt="eatable14"/>
                </div>
                <div>
                    <h2>PERSONAL RESULTS</h2>
                    <p>During this project, I was working with in group of people from different countries and cultures. This gave me a broader picture of how it works with a team that has different ways of handling and solving problems. As well as how cultural differences need to be considered from the beginning of the idea to the design decision that will shape the final prototype.</p>
                    <p>The project included all parts of the design process, from coming up with an idea to a finished and tested Hi-Fi prototype. This developed my knowledge and made me more used to both software such as Sketch and Marvel, but also to conduct user tests.</p>
                </div>
                
            </div>            
        </section>
        <ProjectsSmall id={"eatable"}/>
        </>
    )
};

export default Eatable;
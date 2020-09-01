import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import './Projects.css';

import Background from '../../assets/images/master-thesis/header.png';




const MasterThesis = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <>
        <section id="actReact" className="projectSection">

            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">Master Thesis</h1>
            <div className="content contentWidth">
            <h2>User Interface's Impact on Player's Immersion</h2>
            <p>The thesis can be found at <a target="_blank" href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1429866&dswid=1006" rel="noopener noreferrer">Digitala Vetenskapliga Arkivet</a>.</p>
            <h3>Abstract</h3>
            <p>With the success of technology, computers and digital games have become a new, more advanced, medium for storytelling. What sets digital games apart from more traditional forms is that the player must engage and interact with a game world and the characters on a whole new level. Immersion is a term that is described as the experience of feeling deeply engaged within another reality. So how does a player become immersed in the game?</p>
            <p>In order to enable the necessary interactions between the player and the game, a user interface is required. User interface elements can be designed in a variety of ways. Some elements are part of the game’s geometric world and its narrative, so-called diegetic elements. Then there is the opposite, nondiegetic elements, which have no connection to the game story at all and only fulfill the purpose of conveying information to the player.</p>
            <p>The aim of this thesis was to investigate how the user interface affects the players’ immersion. The study consisted of a theoretical literary section and two empirical investigations in the field of user tests and online surveys. What was investigated in this thesis was how non-diegetic user interface elements affect immersion as well as whether immersion increases by integrating the user interface into the gaming world.</p>
            <p>Determining a statistical significance difference in immersion seems difficult. But with the help of interviews and online surveys, the player’s preferences have shown that minimizing non-diegetic elements can increase immersion and that integrating the user interface into the game world is a very good and preferred solution for conveying the necessary information to the player. However, the data collected indicate that failure to convey the necessary information can lead to the opposite, reduced immersion.</p>
            </div>      
        </section>
        <ProjectsSmall id={"master-thesis"}/>
        </>
    )
};

export default MasterThesis;
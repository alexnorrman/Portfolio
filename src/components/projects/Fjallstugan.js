import React, { useEffect } from 'react';
import ProjectsSmall from "../projects/ProjectsSmall";
import StickyImages from './StickyImages';
import './Projects.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Background from '../../assets/images/fjallstugan/header.png';
import live from '../../assets/images/fjallstugan/liveuse1.png';
import fjall1 from '../../assets/images/fjallstugan/fjall1.png';
import fjall2 from '../../assets/images/fjallstugan/fjall2.png';
import fjall3 from '../../assets/images/fjallstugan/fjall3.png';
import fjall4 from '../../assets/images/fjallstugan/fjall4.png';
import fjall5 from '../../assets/images/fjallstugan/fjall5.png';
import fjall6 from '../../assets/images/fjallstugan/fjall6.png';
import fjall7 from '../../assets/images/fjallstugan/fjall7.png';
import fjall8 from '../../assets/images/fjallstugan/fjall8.png';


/*import HHeader from '../../images/fjallstugan/header.png';
import header from '../images/fjallstugan/header.png';
<section className="project" id="fjallstugan" style={{backgroundImage: `url(${Background})`}}>*/

/*            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>*/
const Fjallstugan = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    /*const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            console.log("size: " + windowWidth);
            setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
*/
    const images = [
        {id: 0, name: "fjällstugan-1", img: fjall1, offset: window.innerHeight*(2/4)},
        {id: 1, name: "fjällstugan-2", img: fjall2, offset: window.innerHeight*(4/4)},
        {id: 2, name: "fjällstugan-3", img: fjall3, offset: window.innerHeight*(5/4)},
        {id: 3, name: "fjällstugan-8", img: fjall8, offset: window.innerHeight*(6/4)},
        {id: 4, name: "fjällstugan-7", img: fjall7, offset: window.innerHeight*(7/4)},
        {id: 5, name: "fjällstugan-6", img: fjall6, offset: window.innerHeight*(8/4)},
        {id: 6, name: "fjällstugan-4", img: fjall4, offset: window.innerHeight*(9/4)},
        {id: 7, name: "fjällstugan-5", img: fjall5, offset: window.innerHeight*(10/4)},
    ];



    return(
        <>
        <section id="fjallstugan" className="projectSection">
            <div className="projectHeader" style={{backgroundImage: `url(${Background})`}}>
            </div>
            <h1 className="contentWidth">Fjällstugan</h1>
            <div className="content contentWidth">
                <div className="">
                    <div className="contentText" style={{paddingTop:0}}>
                        <h2>About the project</h2>
                        <p>
                        The application was a school project for the course <span style={{fontStyle: "italic"}}>Development for mobile applications</span> at Umeå University.<br />
                        It was created using Android Studios and written in Java. To enable the solution, two APIs were used; <span style={{fontStyle: "italic"}}> Google Maps API</span> and <span style={{fontStyle: "italic"}}>Lantmäteriet's API</span>
                        </p>
                        <p>
        The project can be found at my github page:<br /><br />

                            <a style={{padding:"0px"}} target="_blank" href="https://github.com/alexnorrman/fjallstugan" rel="noopener noreferrer" className="social">
                        <FontAwesomeIcon style={{verticalAlign:"middle"}} icon={faGithub} size="2x" /> alexnorrman/fjallstugan
                        </a>
                        
                        </p>
                        
                        
                        
                        <img className="newImg" src={fjall1} alt={"fjall1"}></img>
                    </div>

                    

                    

                    <div className="contentText">
                        <h2>detailed terrain maps</h2>
                        <p>
                        Fjällstugan uses <a target="_blank" href="https://www.lantmateriet.se/" rel="noopener noreferrer">Lantmäteriet</a>'s maps to show a detailed map with hiking trails and everything needed.
                        </p>
                        <p>
                            No more need for a physical hiking map!
                        </p>
                        <img className="newImg" src={fjall2} alt={"fjall2"}></img>
                    </div>
                    
                    <div className="contentText">
                        <h2>complete list of all of STF's stations</h2>
                        <p>
                        All STF's mountain cabins are marked on the map and information for these can be found in the application.</p>
                        <img className="newImg" src={fjall3} alt={"fjall3"}></img>
                        <img className="newImg" src={fjall8} alt={"fjall8"}></img>
                    </div>
                    <div className="contentText">
                        <h2>Save the maps</h2>
                        <p>
                        The maps can be saved and used even when internet access in the mountains is poor.</p>
                        <img className="newImg" src={fjall7} alt={"fjall7"}></img>
                        <img className="newImg" src={fjall6} alt={"fjall6"}></img>
                    </div>
                    <div className="contentText">
                        <h2>customize the maps</h2>
                        <p>
                        It is possible to adapt the map to your own needs. It is also possible to switch on and off your position as well as the stations' positions.</p>
                        <img className="newImg" src={fjall4} alt={"fjall4"}></img>
                        <img className="newImg" src={fjall5} alt={"fjall5"}></img>
                    </div>
                    <div  className="contentText" style={{padding:"0"}}>
                        <h2>PERSONAL RESULTS</h2>
                        <p>
                        This assignment was very fun and rewarding.<br />
                        The final result is an application that I am very pleased with.<br />
                        This was my first fully made application made with Android Studio and Java which has contributed to increased understanding and knowledge in the development of android applications. 
                        </p>
                        <p>
                        The choice to make a mountain map comes from my interest in hiking.<br />
                        Since I know that there are already similar applications out there, I chose to put some focus on the mountain stations to get some variation, which the other applications do not have.<br />
                        I think this can be a good functionality because you often start or end up on one of these.
                        </p>
                        <p>
                        I made this application by myself during the summer of 2019.<br />
                        </p>
                        <p>I have also used it on several hikes.</p>
                        <div style={{margin:"auto"}}>
                            <p></p>
                            <img style={{width:"100%"}} src={live} alt={"live"}></img>
                        </div>
                        
                    </div>
                </div>
                <StickyImages className="StickyImages" images={images}/>
            </div>
            <p></p>
            

            
        </section>
        <ProjectsSmall id={"fjallstugan"}/>
        </>
    )
};

export default Fjallstugan;
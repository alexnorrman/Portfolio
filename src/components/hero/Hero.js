import React from 'react';
import HeroSVG from "./HeroSVG";


/*
import React, { useState, useEffect } from 'react';
import ArrowSVG from "./ArrowSVG";

const [showArrow, setShowArrow] = useState(false); /* Should be true if arrow is activated */
/*
    const checkScrollTop = () =>{
        if(window.pageYOffset === 0){
            setShowArrow(true);
        }
        else{
            setShowArrow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => (window.removeEventListener('scroll', checkScrollTop))
    }, []);
    
    return(
        <section className="hero">
            <HeroSVG />
            {showArrow && <ArrowSVG />}
        </section>
    )
*/

const Hero = () => {
    return(
        <section className="hero">
            <HeroSVG />
        </section>
    )
    
};

export default Hero;
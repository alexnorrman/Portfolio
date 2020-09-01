import React, { useState, useEffect } from 'react';
import CrossfadeImage from "react-crossfade-image";
import './Projects.css';

const StickyImages = (props) => {

    const [currentImg, setCurrentImg] = useState(props.images[0].img);
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.pageYOffset);
        changeImage();
    }
    function changeImage() {
        for(var i = 0; i < props.images.length-1; i++){
            if(scrollY >= props.images[i].offset && scrollY < props.images[i+1].offset)
                setCurrentImg(props.images[i+1].img);
            else if(scrollY < props.images[0].offset)
                setCurrentImg(props.images[0].img);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    })

    return(
        <div className="contentItem sticky">
            <CrossfadeImage src={currentImg} style={{ maxWidth: '100%', maxHeight: '100%' }}  />
        </div>
    )
};

export default StickyImages;
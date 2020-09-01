import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Item = (props) => {

    const [isShown, setIsShown] = useState(false);

    return(
        <Link to={{pathname: `/projects/${props.id}`}}>
            <div className="item"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    <img src={props.img} alt={props.name}/>
                    {isShown && <div className="itemblur" >
                    </div>}    
                    {isShown && <div className="itemtext" >
                        <h2>{props.name}</h2>
                        {props.role}
                    </div>}      
            </div>
        </Link>
    );
};

export default Item;
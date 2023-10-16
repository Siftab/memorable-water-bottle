

import React from 'react';
import './Bottle.css'

const Bottle = ({props}) => {
    console.log(props)
    const {name ,img,price}=props;
    return (
        <div className='card'>
            <h3>{name}</h3>
            <img className='chobi' src={img} alt="" srcset="" />
            <p>{price} $$</p>
            
        </div>
    );
};

export default Bottle;
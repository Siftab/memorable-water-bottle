import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {
    const [bottles,setbottles]=useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setbottles(data))
    },[]);
    
    return (
        <div>

            <p>ok {bottles.length}</p>
            <div className="container">{
                bottles.map((bottle,idx)=><Bottle props={bottle} key={idx}></Bottle>)
            }</div>
        </div>
    );
};

export default Bottles;
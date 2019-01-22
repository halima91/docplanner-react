import React, { Component } from 'react';
import './list3.css';


const Item3 =(props)=>{
return <div className="itemcontainer">
       <img className="image" src={props.item.image}/>
       <h3>{props.item.title}</h3>
       <p>{props.item.para}</p>
</div>
}
export default Item3;
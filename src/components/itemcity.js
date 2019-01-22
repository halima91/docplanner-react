import React, { Component } from 'react';
import  './city.css';
import {Button} from 'react-bootstrap';
const Itemcity=(props)=>{
return <div>
<img src={props.item.image}/>
<label>{props.item.name}</label>
<Button className="btn"bsStyle="primary ">{props.item.button}</Button>

</div>

}
export default Itemcity;
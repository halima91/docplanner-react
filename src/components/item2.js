import React, { Component } from 'react';
import {DropdownButton,MenuItem} from 'react-bootstrap';
let btn
const Item2=(props)=>{
   (props.item.selectchoose) ? btn = <DropdownButton
   bsStyle="default" style={{width:"15vw"}} title= {props.item.button}> 
  
   <MenuItem eventKey="1" selected>Argentine</MenuItem>
   <MenuItem eventKey="2">Brazil</MenuItem>
   <MenuItem eventKey="3">America</MenuItem>
   </DropdownButton>
   //  <button>{props.item.button}</button>
   : btn = ''
    return (<div className="carditem" style={{backgroundColor: props.item.background}}>
     <h4>{props.item.firsttitle} </h4>
     <h2> {props.item.secondtitle}</h2>
     {btn}
     <img className="image" src ={props.item.image} height="50%" width="30%"/>
      
     </div>)
}
export default Item2;

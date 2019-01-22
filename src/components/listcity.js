import React, { Component } from 'react';
import Itemcity from './itemcity';
import  './city.css';
const tab=[{image:"https://www.docplanner.com/images/warsaw.png",name:"Warsaw",button:"see openings"},
    {image:"https://www.docplanner.com/images/barcelona.png",name:"Barcelona",button:"see openings"},
    {image:"https://www.docplanner.com/images/istanbul.png",name:"Istanbul",button:"see openings"},
    {image:"https://www.docplanner.com/images/rome.png",name:"Rome",button:"see openings"},
    {image:"https://www.docplanner.com/images/mexico-city.png",name:"Mexico-city",button:"see openings"},
    {image:"https://www.docplanner.com/images/curitiba.png",name:"Curitiba",button:"see openings"}];

class Listcity extends Component {

    render() { 
        return ( <div className="listcitycontainer">
                   {tab.map((el,index)=><Itemcity item={el} key={index}/>)}
           


        </div> );
    }
}
 
export default Listcity;
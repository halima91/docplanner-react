import React, { Component } from 'react';
import Item2 from "./item2";
import "./list2.css";
const tab1=[
    {firsttitle:"For patients",
    secondtitle:"Find a doctor, book a visit and solve any health-related doubt",
    button:"CHOOSE COUNTRY",
    image:"https://www.docplanner.com/img/screen-marketplace@2x.png",
    background:"#00b39b",
    selectchoose:true
    },
    {
        firsttitle:"For doctors",
        secondtitle:"Save time managing visits and cut no-shows by half",
        button:"CHOOSE COUNTRY",
        image:"https://www.docplanner.com/img/screen-saas@2x.png",
        background:"#3d83df",
        selectchoose:false

    }

]
class List2 extends Component {
    
    render() { 
        return(<div className="card">
             {tab1.map((el,index)=><Item2 item= {el} key={index}/>)}
             </div>) ;
    }
}
 
export default List2;
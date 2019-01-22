import React, { Component } from 'react';
import Item3 from './item3';
import './list3.css';

const tab=[{image:"https://www.docplanner.com/img/flag.png",title:"Leader in 10 countries",para:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
{image:"https://www.docplanner.com/img/visits.png",title:"1 million appointments",para:"booked last month"},{image:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",para:"visit us every month"},
{image:"https://www.docplanner.com/img/doctors.png",title:"2 million active doctors",para:"trust in our solutions"}]

class List3 extends Component {

    render() { 
        return (<div className="containerglobal">
        <div>
        <h1 className="titlecard">The world's <br/>biggest healthcare platform</h1>
        <p className="paracard">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        </div>
       <div className="container">
        {tab.map((el,index)=><Item3 item={el} key={index}/>)}
        </div>
        </div>  );
    }
}
 
export default List3;
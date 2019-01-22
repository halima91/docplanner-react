import React, { Component } from 'react';
import Item1 from './item1';
import './list1.css';
import squarelogo from '../squarelogo.png';

const tab1=[
{para:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere"},
{para:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients"}]


class List1 extends Component {
    render() { 
        return (  
            <div>
                <div className="title">
                <img  className="squarelogo"src={squarelogo}alt='squarelogo' />
                <h1> Making the healthcare experience more human</h1>
                </div>
           <div className="introduction">
            
             {tab1.map((el,index)=><Item1 item ={el} key={index}/>)}
            

        </div> 
        </div>
        );
    }
}
 
export default List1;
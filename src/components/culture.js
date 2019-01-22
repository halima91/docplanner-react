import React, { Component } from 'react';
import './culture.css'
class Culture extends Component {

    render() { 
        return ( <div className="parentlink">
    <h1 className="title">We are a global<br/>company<br/>with local culture </h1>
        <ul className="uplink">
            <li><a href="#" className="link">ZnanyLekarz</a></li>
            <li><a href="#" className="link">Doctoralia</a></li>
            <li><a href="#" className="link">MioDottore</a></li>
            <li><a href="#" className="link">DoktorTakvimi</a></li>
            <li><a href="#" className="link">ZnamyLekar</a></li>
        

        </ul>
        </div> );
    }
}
 
export default Culture;
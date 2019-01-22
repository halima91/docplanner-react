import React, { Component } from 'react';

import './App.scss';
import Navbar from './components/Navbar/Navbar'
import List1 from './components/list1';
import List2 from './components/list2';
import Culture from './components/culture';
import List3 from './components/list3';
import Information from './components/information';
import Listcity from './components/listcity'
import Footer from './components/footer';
class App extends Component {
  render() {
    
   return <div>
      <Navbar/>
      <List1/>
      <List2/>
      <Culture/>
      <List3/>
      <Information/>
      <Listcity/>
      <Footer/>
     </div>
        
  }
}

export default App;

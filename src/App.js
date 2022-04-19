import React, { useState } from 'react';

import Menu from './components/Menu';
import MyHome from './components/Home';
import Courses from './components/Courses';
import Events from './components/Events';

import {capitalizeFirstLetter} from './utils';


const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderMainPage = () => {
    console.log(activePage);
    if(activePage === 'home') {
      return <MyHome />
    } else  if(activePage === 'events') {
      return <Events />
    } else  if(activePage === 'courses') {
      return <Courses />
    } else {
     return (
    <h1>{capitalizeFirstLetter(activePage)}</h1>
     )
    }

  }

 return (
  <div>
    <Menu currentPage={activePage}  setActivePage={setActivePage} />
    <div style={{textAlign: 'center'}}>
    {renderMainPage()}
    </div>
  </div>
)};

export default App;

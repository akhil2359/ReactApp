import React from 'react';

import { capitalizeFirstLetter } from '../utils';


const  MenuItem = ({ currentPage, menuName, setActivePage }) => {
  return <div style={{color: currentPage === menuName ? 'red' : 'black'}} className='menuItem' onClick={() => setActivePage(menuName)}>{capitalizeFirstLetter(menuName)}</div>
};

export default MenuItem;
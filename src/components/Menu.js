import React from 'react';

import './Home.css'

import MenuItem from './MenuItem';

const  Menu = ({ currentPage, setActivePage }) => {

  const menuItems = ['home', 'courses', 'events', 'contact', 'support'];

   return (
        <div className='nav'>
            {menuItems.map((menuName) => <MenuItem currentPage={currentPage} menuName={menuName} setActivePage={setActivePage} />)}
        </div>
)};

export default Menu;
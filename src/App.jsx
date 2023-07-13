import React from 'react';
import Navbar from './components/Navber/Navber';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
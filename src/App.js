// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import React from 'react';
import Coupons from './compsCoupons/coupons';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Advisors from './‏‏compsAdvisors/advisors';
import Home from './compsHome/home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/advisors' element={<Advisors/>}/>
      <Route path='/coupons' element={<Coupons/>}/>
      <Route path='/*' element={<h2 className='display-4'>page not found , 404</h2>}/>

    </Routes>
      
    </BrowserRouter>
  
    

  )
}

export default App;

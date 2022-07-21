import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from './Home'; 
import { Cuisine } from './Cuisine';
import { Searched } from './Searched';
import { Error } from './Error'; 
import { Recipes } from './Recipes';

export function Pages() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/cuisine/:type" element={<Cuisine />} />
    <Route path="/searched/:search" element={<Searched />} />
    <Route path="*" element={<Error />} />
  </Routes>
  )
}


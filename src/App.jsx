import React, { useState } from 'react';
import './App.css';
import './styles/style.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom'
import {resources} from './assets/ressurser.js';
import Resources from './components/Resources';

function App() {
  
  

  return (

    <Layout elements={<Resources/>}>
    <Routes>
        
        <Route path="/category/:slug" element={<Resources resources={resources}/>} />

  </Routes> </Layout>
  
  );
}

export default App;



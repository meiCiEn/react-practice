import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Route as RouteV6 } from 'react-router-dom'; // Import Route as RouteV6
import "./styles.css";
import Layout from './Layout';




// Pages
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';

// Components
import ToDoList from './components/ToDoList/ToDoList.js';
import Stopwatch from './components/CountdownComponents/Stopwatch';
import Countdown from './components/CountdownComponents/Countdown';
import VariableCountdown from './components/VariableCountdown/VariableCountdown';
import Calculator from './components/Calculator/Calculator';
import MemoryGame from './components/MemoryGame/MemoryGame';
import preview from './hompage.png';

const AppRouter = () => {

  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <RouteV6 path="/" element={ <Home /> } />
          <RouteV6 path="/about" element={ <About /> } />
          <RouteV6 path="/todo" element={ <ToDoList /> } />
          <RouteV6 path="/stopwatch" element={ <Stopwatch /> } />
          <RouteV6 path="/countdown" element={ <VariableCountdown/>} />
          <RouteV6 path="/calculator" element={ <Calculator /> } />
          <RouteV6 path="/memory-game" element={ <MemoryGame /> } />
          <RouteV6 path="/preview" element={preview} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;

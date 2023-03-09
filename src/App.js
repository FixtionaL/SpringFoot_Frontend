import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Players from './components/Players';
import Transfers from './components/Transfers';
import './App.css';

export default function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="players" element={<Players />} />
          <Route path="transfers" element={<Transfers />} />
        </Route>
      </Routes>
    </BrowserRouter>
      );
    }

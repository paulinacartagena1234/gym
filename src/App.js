import React from 'react'
import { Routes, Route, Router } from 'react-router'
import Entrenamiento from './components/Entrenamiento.js';
import Menu from './components/Menu.js';
import Programarentrenamiento from './components/Programarentrenamiento.js';
import Register from './components/Register.js';

import Sidebar from './ui/Sidebar.js';

function App() {
  return (
    <div className='md:flex min-h-screen text-center text-3x1 text-red-700'>
      <Sidebar />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/entrenamiento" element={<Entrenamiento />} />
        <Route path="/programarentrenamiento" element={<Programarentrenamiento />} />
      </Routes>
    </div>
  );
}

export default App;

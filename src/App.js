import React from 'react'
import { Routes, Route } from 'react-router'
import firebase, { FirebaseContext } from './firebase'
import Entrenamiento from './components/Entrenamiento.js';
import Menu from './components/Menu.js';
import Programarentrenamiento from './components/Programarentrenamiento.js';
import Register from './components/Register.js';

import Sidebar from './ui/Sidebar.js';

function App() {
  return (
    <FirebaseContext.Provider
      value={
        { firebase }
      }
    >
      <div className='md:flex min-h-screen text-center text-3x1 text-gray-900'>
        <Sidebar />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/entrenamiento" element={<Entrenamiento />} />
          <Route path="/programarentrenamiento" element={<Programarentrenamiento />} />
        </Routes>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;

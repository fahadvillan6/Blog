import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Blog from './Pages/Blog';
import Navlink from './Shared/Navlink';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Navlink />}>
          <Route path='/create' element={<Create />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

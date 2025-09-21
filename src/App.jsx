import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';  // fixed typo from Seacrh to Search
import "./index.css";

function App() {
  return (
         
      <Routes>
        <Route path="/transport" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';
import Home2 from './pages/Home2';
import MovieCollection2 from './pages/MovieCollection2';
import Podcasts from './pages/Podcasts2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home2} />
        <Route path="/Podcast" Component={Podcasts} />
        <Route path="/MovieCollection" Component={MovieCollection2} />
      </Routes>
    </Router>
  );
}

export default App;

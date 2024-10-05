import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import Navbar from './components/Navbar';  // Import Navbar
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

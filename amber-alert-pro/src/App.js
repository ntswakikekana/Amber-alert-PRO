import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'; // landing page component
import ViewMissing from './components/ViewMissing'; 
import ReportMissing from './components/ReportMissing'; 
import ContactPolice from './components/ContactPolice';
import Login from './components/Login';
import AboutUs from './components/AboutUs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view-missing" element={<ViewMissing />} />
        <Route path="/report-missing" element={<ReportMissing />} />
        <Route path="/contact-police" element={<ContactPolice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;

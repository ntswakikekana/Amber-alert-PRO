import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'; // Assuming this is your landing page component
import ViewMissing from './components/ViewMissing'; // Adjust the path as necessary
import ReportMissing from './components/ReportMissing'; // Adjust the path as necessary
import ContactPolice from './components/ContactPolice'; // Adjust the path as necessary
import Login from './components/Login';
import SignUp from './components/SignUp';
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;

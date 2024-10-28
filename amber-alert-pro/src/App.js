import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import SideNav from './components/SideNav'; // Import SideNav component
import Home from './components/Home'; // Import Home component
import Login from './components/Login'; // Import Login component
import ReportMissing from './components/ReportMissing'; // Import ReportMissing component
import SignUp from './components/SignUp'; // Import SignUp component
import ContactPolice from './components/ContactPolice'; // Import ContactPolice component
import React from 'react';
import FormComponent from './components/FormComponent';
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
        <>
            <div className="App">
                <FormComponent />
            </div>
            <Router>
                <SideNav /> {/* Render side navigation */}
                <Routes> {/* Define routes for different components */}
                    <Route path="/form" element={<FormComponent />} />
                    <Route path="/" element={<Home />} /> {/* Home route */}
                    <Route path="/report-missing" element={<ReportMissing />} /> {/* Report Missing route */}
                    <Route path="/contact-police" element={<ContactPolice />} /> {/* Contact Police route */}
                    <Route path="/log-in" element={<Login />} /> {/* Login route */}
                    <Route path="/sign-up" element={<SignUp />} /> {/* Sign Up route */}
                </Routes>
            </Router>
        </>
    );
};

export default App; // Export App component
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

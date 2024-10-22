import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import SideNav from './components/SideNav'; // Import SideNav component
import Home from './components/Home'; // Import Home component
import Login from './components/Login'; // Import Login component
import ReportMissing from './components/ReportMissing'; // Import ReportMissing component
import SignUp from './components/SignUp'; // Import SignUp component
import ContactPolice from './components/ContactPolice'; // Import ContactPolice component
import React from 'react';
import FormComponent from './components/FormComponent';

// Main App component that sets up routing for the application
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

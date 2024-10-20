<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ReportMissingPerson from './components/ReportMissingPerson';
import ViewMissingPersons from './components/ViewMissingPersons';
import ContactPolice from './components/ContactPolice';
import SignUpLogIn from './components/SignUpLogIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report-missing-person" element={<ReportMissingPerson />} />
          <Route path="/view-missing-persons" element={<ViewMissingPersons />} />
          <Route path="/contact-police" element={<ContactPolice />} />
          <Route path="/sign-up-login" element={<SignUpLogIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import SideNav from './components/SideNav'; // Import SideNav component
import Home from './components/Home'; // Import Home component
import Login from './components/Login'; // Import Login component
import ReportMissing from './components/ReportMissing'; // Import ReportMissing component
import SignUp from './components/SignUp'; // Import SignUp component
import ContactPolice from './components/ContactPolice'; // Import ContactPolice component

// Main App component that sets up routing for the application
const App = () => {
    return (
        <Router>
            <SideNav /> {/* Render side navigation */}
            <Routes> {/* Define routes for different components */}
                <Route path="/" element={<Home />} /> {/* Home route */}
                <Route path="/report-missing" element={<ReportMissing />} /> {/* Report Missing route */}
                <Route path="/contact-police" element={<ContactPolice />} /> {/* Contact Police route */}
                <Route path="/log-in" element={<Login />} /> {/* Login route */}
                <Route path="/sign-up" element={<SignUp />} /> {/* Sign Up route */}
            </Routes>
        </Router>
    );
};

export default App; // Export App component

>>>>>>> 798dcd9861966878eef651e1a4be2b4d862f2160

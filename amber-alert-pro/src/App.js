import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar
>>>>>>> add0763fd0aa509c55be5d6a12a250ab9d085b3c
import Home from './components/Home';
import ReportMissingPerson from './components/ReportMissingPerson';
import ViewMissingPersons from './components/ViewMissingPersons';
import ContactPolice from './components/ContactPolice';
import SignUpLogIn from './components/SignUpLogIn';

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report-missing-person" element={<ReportMissingPerson />} />
            <Route path="/view-missing-persons" element={<ViewMissingPersons />} />
            <Route path="/contact-police" element={<ContactPolice />} />
            <Route path="/sign-up-login" element={<SignUpLogIn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
>>>>>>> add0763fd0aa509c55be5d6a12a250ab9d085b3c

export default App;

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


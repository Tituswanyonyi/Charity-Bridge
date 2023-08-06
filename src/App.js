import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignupForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import PrivateRoutes from './PrivateRoutes';
import DonorDashboard from './Pages/Donor/DonorDashboard';
import NgoDashboard from './Pages/Ngo/NgoDashboard';

const App = () => {
  // Replace this with the actual user data or fetch it from the API or authentication context
  const currentUser = {
    // Your user data here...
    name: 'John Doe',
    role: 'Donor', // or 'Ngo', etc.
  };

  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          {/* Define your routes using the Route element */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<About />} />
          <Route element={<PrivateRoutes currentUser={currentUser} />}>
            <Route path="/Pages" element={<DonorDashboard />} roles={['Admin', 'Donor']} />
            <Route path="/Pages" element={<NgoDashboard />} roles={['Admin', 'Ngo']} />
          </Route>
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;

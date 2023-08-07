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
import AdminDashboard from './Pages/Admin/AdminDasboard';


const App = () => {

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
            <Route path="/Pages/Donor" element={<DonorDashboard />} roles={['Admin', 'Donor']} />
            <Route path="/Pages/Ngo" element={<NgoDashboard />} roles={['Admin', 'Ngo']} />
            <Route path="/Pages/Admin" element={<AdminDashboard />} roles={['Admin']} />
          </Route>
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;

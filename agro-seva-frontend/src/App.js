// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Use HomePage as the home component
import Signup from './components/Signup';
import Login from './components/Login';
import FarmerHome from './components/FarmerHome';
import UserHome from './components/UserHome';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import { CartProvider } from './context/CartContext';
import { ServiceProvider } from './context/ServiceContext';
import WeatherUpdates from './components/WeatherUpdates';
import MarketInfo from './components/MarketInfo';
import './components/Services.css';

const servicesData = [
    { id: 1, name: 'Service 1', description: 'Description for Service 1' },
    { id: 2, name: 'Service 2', description: 'Description for Service 2' },
    { id: 3, name: 'Service 3', description: 'Description for Service 3' },
    { id: 4, name: 'Service 4', description: 'Description for Service 4' },
];

const App = () => {
  return (
      <CartProvider>
          <ServiceProvider>
              <Router>
                  <Navbar />
                  <Routes>
                      <Route path="/" element={<HomePage />} /> {/* Render HomePage on root path */}
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/farmer-home" element={<FarmerHome />} />
                      <Route path="/user-home" element={<UserHome />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/weather-updates" element={<WeatherUpdates />} />
                      <Route path="/market-info" element={<MarketInfo />} />
                      <Route path="/services/:id" element={<ServiceDetail servicesData={servicesData} />} />
                  </Routes>
              </Router>
          </ServiceProvider>
      </CartProvider>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DogsPage from './pages/DogsPage';
import ServicesPage from './pages/ServicesPage';
import LittersPage from './pages/LittersPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="dogs" element={<DogsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="litters" element={<LittersPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // Import đúng cách nếu dùng default export
import { routes } from './pages';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={<Layout>{route.element}</Layout>} 
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

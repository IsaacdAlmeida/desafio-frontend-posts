import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/main/Home';
import PostDetails from './pages/details/PostDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;

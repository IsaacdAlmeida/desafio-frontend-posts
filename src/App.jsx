import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/main/Home';
import PostDetails from './pages/details/PostDetails';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

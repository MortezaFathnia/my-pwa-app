import React, { useState, useEffect } from 'react';
import MessageList from './components/messages/MessageList';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/login/login';
import UserContext from './contexts/AuthContext';
import { RequireAuth } from './hooks/RequireAuth';

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ name: 'test' });
  }, []);
  return (
    <UserContext.Provider value={{ user: Object }}>
      <div className="wrapper">
        <div className="ui container">
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/messages"
                element={
                  <RequireAuth>
                    <MessageList />
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;

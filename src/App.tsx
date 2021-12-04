import React, { useState, useEffect } from 'react';
import MessageList from './components/messages/MessageList';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import LoginPage from './components/login/login';
import UserContext from './contexts/AuthContext';
import { RequireAuth } from './hooks/RequireAuth';
import TheLayout from './containers/TheLayout';
import routes from './routes';
import { useSelector } from 'react-redux';

type Istate={
  login:Object;
  posts:Object;
}

const App = () => {
  const [user, setUser] = useState({});
  const { isLoggedIn }:any = useSelector((state:Istate) => state.login);
  console.log(isLoggedIn);
  useEffect(() => {
    setUser({ name: 'test' });
  }, []);
  return (
    <UserContext.Provider value={{ user: Object }}>
      <div className="wrapper">
        <div>
          <Router>
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/messages" /> : <LoginPage />}
              />
              <Route path="/login" element={<LoginPage />} />

              {routes.map((route: any) => {
                return (
                  <Route
                    path={route.path}
                    element={
                      <RequireAuth>
                        <TheLayout>
                          <route.element />
                        </TheLayout>
                      </RequireAuth>
                    }
                  />
                );
              })}
            </Routes>
          </Router>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;

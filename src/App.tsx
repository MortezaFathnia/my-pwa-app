import React, { useState, useEffect } from 'react';
import MessageList from './components/MessageList';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"; 
import './scss/style.scss';
import LoginPage from './components/login';
import UserContext from './contexts/AuthContext';
import { RequireAuth } from './hooks/RequireAuth';

const App = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser({ name: 'test' })
    }, [])
    return (
        <UserContext.Provider value={{user:Object}}>
            <div className="ui container">
                <Router>
                    <Routes>
                        //exact
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/messages" element={
                            <RequireAuth>
                                <MessageList />
                            </RequireAuth>} />
                    </Routes>
                </Router>
            </div>
        </UserContext.Provider >
    );
}

export default App;
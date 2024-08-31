import './App.css';
import React from 'react';
import 'firebase/firestore'; 
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home'
import Login from './page/Login'
import ConnectStrava from './page/ConnectStrava';
import StravaAuth from './page/StravaAuth';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context/authContext';


function App() {
  return (
    <AuthProvider>
      <Router>
      <div>
        <section>                              
            <Routes>
              <Route path="/" element={<Login/>}/>                                                   
              <Route path="/dashboard" element={<Home/>}/>
              <Route path="/connect-strava" element={<ConnectStrava />}/>
              <Route path="/strava-auth" element={<StravaAuth />}/>     
            </Routes>                    
        </section>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

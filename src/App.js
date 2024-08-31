import './App.css';
import React from 'react';
import 'firebase/firestore'; 
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home'
import ConnectStrava from './page/ConnectStrava';
import StravaAuth from './page/StravaAuth';
import { AuthProvider } from './context/authContext';


function App() {
  return (
    <AuthProvider>
      <Router>
      <div>
        <section>                              
            <Routes>                                                       
                <Route path="/" element={<Home/>}/>
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

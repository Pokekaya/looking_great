import './App.css';
import React from 'react';
import 'firebase/firestore'; 
import firebaseApp from './firebaseConfig';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home'

const db = firebaseApp; // Get a reference to the Firestore database

function App() {
  return (
    <Router>
    <div>
      <section>                              
          <Routes>                                                       
              <Route path="/" element={<Home/>}/>
          </Routes>                    
      </section>
    </div>
  </Router>
  );
}

export default App;

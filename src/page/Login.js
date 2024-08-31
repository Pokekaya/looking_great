import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import login from '../assets/login.png'; 
import lookingGreatLogo from '../assets/looking_graet_logo_transparent.png'; 
import ConnectStrava from './ConnectStrava';
import { authContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { authToken } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() =>{
    if(authToken !== null){
        navigate("/dashboard");
    }
});

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        {/* Left side with people images */}
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="d-flex justify-content-center align-items-center h-100 login-image-container">
            <img
              src={login}
              alt="Login Illustration"
              className="img-fluid login-image"
            />
          </div>
        </div>
        
        {/* Right side with logo and Strava button */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="card w-100 border-0 login-card">
            <div className="card-body text-center">
              <img src={lookingGreatLogo} alt="Looking Great Logo" style={{ maxWidth: '250px', marginBottom: '20px' }} />
              <ConnectStrava></ConnectStrava>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

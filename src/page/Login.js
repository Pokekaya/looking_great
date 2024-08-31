import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import login from '../assets/login.png'; // Adjust the path according to your project structure

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, add your authentication logic.
    // If authentication is successful, navigate to the dashboard.

    navigate('/dashboard');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="d-flex justify-content-center align-items-center h-100 login-image-container">
            <img
              src={login}
              alt="Login Illustration"
              className="img-fluid login-image"
            />
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="card w-100 border-0 login-card">
            <div className="card-body">
              <h3 className="card-title text-center">Log in</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password <span className="text-danger">*</span></label>
                  <input type="password" className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="keepMeLoggedIn" />
                  <label className="form-check-label" htmlFor="keepMeLoggedIn">Keep me logged in</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Log in now</button>
                <div className="text-center">
                  <a href="#create-account" className="text-decoration-none me-3">Create new account</a>
                  <a href="#forgot-password" className="text-decoration-none">Forgot password</a>
                </div>
                <hr />
                <div className="text-center">
                  <p>Or sign in with</p>
                  <button type="button" className="btn btn-outline-primary me-2">
                    <i className="bi bi-google"></i> Google
                  </button>
                  <button type="button" className="btn btn-outline-primary me-2">
                    <i className="bi bi-facebook"></i> Facebook
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <i className="bi bi-twitter"></i> Twitter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

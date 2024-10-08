import React, { useEffect, useState, useContext  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

function StravaAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasExchangedToken, setHasExchangedToken] = useState(false);
  const { setAuthToken, setAuthData } = useContext(authContext);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    
    if (code && !hasExchangedToken) {
      // Exchange the code for an access token
      exchangeToken(code);
      setHasExchangedToken(true);
      navigate('/dashboard');
    }
  }, [location, hasExchangedToken]);

  const exchangeToken = async (code) => {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: '133480',
        client_secret: 'd3ccbb04fec001b51e8db74d914d36c2f73f75c0',
        code: code,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();

    // Store the access token and make Strava API calls with it
    if(response.status !== 400){
      setAuthToken(data.access_token)
      setAuthData(data)
    }
  };

  return (
    <div>
      <h2>Authenticating with Strava...</h2>
    </div>
  );
}

export default StravaAuth;
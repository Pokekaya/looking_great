import React, { useEffect, useContext } from 'react';
import { authContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function redirectToStrava() {
  const clientId = '133480'; 
  const redirectUri =
  process.env.NODE_ENV === 'production'
    ? 'https://lookinggreat-a4f55.web.app/strava-auth' // production URL
    : 'http://localhost:3000/strava-auth'; // development URL
  const scope = 'read,activity:read'; // adjust scopes as needed
  
  const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}&approval_prompt=force`;

  window.location.href = authUrl;
}

function ConnectStrava() {
    const { authToken } = useContext(authContext);
    const navigate = useNavigate();
    useEffect(() =>{
        if(authToken !== null){
            navigate("/");
        }
    });

    return (
        <div>
        <button onClick={redirectToStrava}>Connect with Strava</button>
        </div>
    );
    }

export default ConnectStrava;
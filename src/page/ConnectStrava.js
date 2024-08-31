import React from 'react';

function redirectToStrava() {
  const clientId = '133480'; // replace with your actual client id
  const redirectUri = 'http://localhost:3000/strava-auth'; // or your production URL
  const scope = 'read,activity:read'; // adjust scopes as needed
  
  const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}&approval_prompt=force`;

  window.location.href = authUrl;
}

function ConnectStrava() {
  return (
    <div>
      <button onClick={redirectToStrava}>Connect with Strava</button>
    </div>
  );
}

export default ConnectStrava;
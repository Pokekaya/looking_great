import React from 'react';
import connectStrava from '../assets/btn_strava_connectwith_orange.png'; 

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
            navigate("/dashboard");
        }
    });

    return (
        <div>
        <a className="btn w-100" onClick={redirectToStrava}>
            <img src={connectStrava} alt="Connect with STRAVA" style={{ maxWidth: '100%' }} />
        </a>
        </div>
    );
    }

export default ConnectStrava;
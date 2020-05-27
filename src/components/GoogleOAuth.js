import React, { useState } from 'react';
import logo from '../logo.svg';
import GoogleLogin from 'react-google-login';
function GoogleOAuth() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const responseGoogle = (res) => {
    console.log("google res", res)
    setName(res.profileObj.name)
    setEmail(res.profileObj.email)
    setUrl(res.profileObj.imageUrl)
    localStorage.setItem('OAuthUserDetail', JSON.stringify(res))
  }
  return (
    <div className="App">
      <header className="App-header">
        {name ? <>
          <h2>Welcome:{name}</h2>
          <h2>Email:{email}</h2>
          <img src={url} alt="name" />
        </>
          : <>
            <img src={logo} className="App-logo" alt="logo" />
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </>}
      </header>
    </div>
  );
}

export default GoogleOAuth;

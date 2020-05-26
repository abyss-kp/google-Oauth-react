import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const responseGoogle = (res) => {
    console.log("google res", res)
    setName(res.profileObj.name)
    setEmail(res.profileObj.email)
    setUrl(res.profileObj.imageUrl)
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
              clientId="834520349168-bhmfqio1abgg41qquk0lgoo3okrg1vv5.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            /></>}
      </header>
    </div>
  );
}

export default App;

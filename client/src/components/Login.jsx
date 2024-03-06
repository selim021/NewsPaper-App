import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin ,createAccount }) {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loggingin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        name,
        password,
      })
      onLogin(response.data.iduser)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loggingin}>Login</button>
      <button onClick={createAccount}>Sign Up</button>

    </div>
  );
}

export default Login;

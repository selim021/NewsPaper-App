import React, { useState } from 'react';
import axios from 'axios';

function Signup({ signup }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const Register = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user', {
        name,
        password,
      });
      signup()
    } catch (error) {
      console.error('Signup failed:', error)
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="name"
        className='form'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
              className='form'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Register}>Sign Up</button>
    </div>
  );
}

export default Signup;

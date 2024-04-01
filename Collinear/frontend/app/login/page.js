'use client'
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenResponse = await fetch(`${process.env.FASTAPI_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    });

    if (tokenResponse.ok) {
      const tokenData = await tokenResponse.json();
      localStorage.setItem('token', tokenData.access_token);
      // Redirect or update UI accordingly
    } else {
      console.error('Login failed');
    }
  };

  return (
    <form style={{color: 'black'}} onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

"use client"

import { setCredentials } from '@/features/authSlice';
import { signInWithEmailPassword, signInWithGoogle } from '@/lib/firebase';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailPassword(email, password);
      const token = await user.getIdToken(); // Firebase JWT Token
      dispatch(setCredentials({ user, token }));
      document.cookie = `token=${token}; path=/`; // Set JWT token in cookies
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      const token = await user.getIdToken(); // Firebase JWT Token
      dispatch(setCredentials({ user, token }));
      document.cookie = `token=${token}; path=/`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

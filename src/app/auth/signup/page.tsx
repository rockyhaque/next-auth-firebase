// src/app/auth/signup.tsx
"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/firebase/firebase";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/app/redux/features/authSlice";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser(userCredential.user));
      console.log(userCredential);
      // Redirect to dashboard or home
    } catch (error) {
      setError("Error signing up");
    }
  };

  const handleGoogleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      dispatch(setUser(result.user));
      
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>

        <button onClick={() => handleGoogleLogin()}>Google Signin/up</button>
        <Button>dd</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;

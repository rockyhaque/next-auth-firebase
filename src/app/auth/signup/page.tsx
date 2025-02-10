"use client";

import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/app/firebase/firebase";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "@/app/redux/features/authSlice";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent. Please check your inbox.");
      dispatch(setUser(userCredential.user));
      router.push("/auth/dashboard");
      console.log(userCredential);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      router.push("/auth/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      router.push("/auth/dashboard");
    }
  }, [auth.currentUser, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-10">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
          <button
            type="submit"
            className="w-full bg-fuchsia-500 rounded-md py-2"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center my-4">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 rounded-md py-2"
        >
          <FcGoogle className="text-xl" /> Sign Up with Google
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center ">{error}</p>
        )}
      </div>
    </div>
  );
};

export default SignUp;

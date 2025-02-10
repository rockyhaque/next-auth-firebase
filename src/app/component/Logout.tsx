"use client";

import { useDispatch } from "react-redux";
import { auth } from "@/app/firebase/firebase";

import { signOut } from "firebase/auth";
import { logout } from "../redux/features/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

"use client";

import { useSelector } from "react-redux";




const Dashboard = () => {
  const user = useSelector((state) => state?.user?.user); 

  console.log(user)

  const isLoading = useSelector((state) => state._persist?.rehydrated) === false;
  if (isLoading) {
    return <h2>Loading...</h2>; // Wait until Redux Persist loads
  }
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName || "User"}</h1>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;

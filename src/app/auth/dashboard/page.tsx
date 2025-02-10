"use client";

import { useAppSelector } from "@/app/redux/hook/hook";

const Dashboard = () => {
  const user = useAppSelector((state) => state?.auth?.user);
  console.log(user);
  return (
    <div>
      {
        <div>
          <h1>Welcome, {user.displayName || "User"}</h1>
          <p>Email: {user.email}</p>
          <p> CreatedAt : {user.createdAt}</p>
          <p> Lastlogged in At : {user.lastLoginAt}</p>
        </div>
      }
    </div>
  );
};

export default Dashboard;
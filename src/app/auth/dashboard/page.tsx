"use client";

import LogoutButton from "@/app/component/Logout";
import { useAppSelector } from "@/app/redux/hook/hook";

const Dashboard = () => {
  const user = useAppSelector((state) => state?.auth?.user);

  // Format timestamp (if exists)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatDate = (timestamp: any) => {
    return timestamp ? new Date(Number(timestamp)).toLocaleString() : "N/A";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {user ? (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-2xl font-semibold text-white">
              {user.displayName ? user.displayName[0] : "U"}
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-gray-800">
              {user.displayName || "User"}
            </h1>
            <p className="text-gray-600">{user.email}</p>

            <div className="mt-4 text-left space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Created At:</span>{" "}
                {formatDate(user.createdAt)}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Last Logged In:</span>{" "}
                {formatDate(user.lastLoginAt)}
              </p>
            </div>
            <div className="mt-6">
              <LogoutButton />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

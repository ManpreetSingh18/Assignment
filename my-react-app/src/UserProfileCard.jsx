import React from "react";
import './index.css'; 

export const UserProfileCard = ({ user }) => {
  return (
    <div className="w-[500px] h-[300px] bg-white shadow-lg rounded-lg p-6 border-4 border-black flex items-center justify-center">
      <div className="flex items-center">
       
        <div className="w-32 h-32 flex-shrink-0 border-4 border-black rounded-lg overflow-hidden">
          <img
            src={user.picture.large}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="ml-6 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold">
            {user.name.first} {user.name.last}
          </h1>
          <p className="text-sm text-gray-600 mt-2">{user.gender}</p>
          <p className="text-sm text-gray-600 mt-1">{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

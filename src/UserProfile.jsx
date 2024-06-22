import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700">{user.bio}</p>
    </div>
  );
};

export default UserProfile;

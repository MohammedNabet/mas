// UserProfile.jsx

import React from "react";
import { useState } from "react";

const UserProfile = () => {
  // Example user data
  const user = {
    name: "John Doe",
    age: 30,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ullamcorper nisi.",
    friends: [
      {
        id: 1,
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
        name: "Friend 1",
      },
      {
        id: 2,
        avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
        name: "Friend 2",
      },
      {
        id: 3,
        avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
        name: "Friend 3",
      },
    ],
  };

  // State for edit mode
  const [editMode, setEditMode] = useState(false);

  // Handle edit button click
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  // Handle form submission (example)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Save form data
    setEditMode(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-200 text-center p-4">
          <h1 className="text-xl font-bold text-purple-600">{user.name}</h1>
          <p className="text-gray-700">Age: {user.age}</p>
        </div>

        {/* Profile Picture */}
        <div className="p-4">
          <img
            src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
            alt="Profile"
            className="rounded-full mx-auto"
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        {/* Bio */}
        <div className="p-4">
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-200"
                defaultValue={user.bio}
              />
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 mt-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-200"
              >
                Save
              </button>
            </form>
          ) : (
            <p className="text-center text-gray-600">{user.bio}</p>
          )}
        </div>

        {/* Friends */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Friends</h2>
          <div className="flex justify-center">
            {user.friends.map((friend) => (
              <div key={friend.id} className="mx-2">
                <img
                  src={friend.avatar}
                  alt="Friend"
                  className="rounded-full w-16 h-16 mx-auto"
                />
                <p className="text-center mt-1 text-sm text-gray-600">
                  {friend.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="p-4 flex justify-center">
          <button
            onClick={handleEditClick}
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-200"
          >
            {editMode ? "Cancel Edit" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

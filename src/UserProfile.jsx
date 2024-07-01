// src/components/UserProfile.js

import React from "react";
import Gallery from "./Gallery";


function UserProfile()  {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-700">johndoe@example.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">About</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default UserProfile;

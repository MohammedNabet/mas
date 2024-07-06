import React from "react";
import Posthome from "./Posthome";

function UserProfile() {
  return (
    <div className="bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col justify-center items-center my-5">
        <div
          className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full"
          style={{
            backgroundImage:
              "url('./maslogo.jpg')",
          }}
        ></div>
        <span className="my-3">@_Club_Mas</span>

        <div className="flex gap-10 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold">10</span>
            <span>Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">1.20 K</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">100 K</span>
            <span>Likes</span>
          </div>
        </div>

        <button className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400">
          Edit profile
        </button>

        <p className="mb-3">Description about me goes here</p>
      </div>
      <Posthome/>
    </div>
  );
}

export default UserProfile;

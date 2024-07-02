// src/components/UserProfile.js

import React from "react";
import Gallery from "./Gallery";


function UserProfile()  {
  return (
    <div class="p-4 bg-white shadow-lg rounded-2xl  dark:bg-gray-800">
      <div class="flex flex-row items-start gap-4 ">
        <img src="./R.jpeg" class="rounded-lg w-28 h-28" />
        <div class="flex flex-col justify-between w-full h-28">
          <div>
            <p class="text-xl font-medium text-gray-800 dark:text-white">
              John Jackson
            </p>
            <p class="text-xs text-gray-400">FullStack dev</p>
          </div>
          <div class="w-full p-2 bg-blue-100 rounded-lg dark:bg-white">
            <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
              <p class="flex flex-col">
                Articles
                <span class="font-bold text-black dark:text-indigo-500">
                  34
                </span>
              </p>
              <p class="flex flex-col">
                Followers
                <span class="font-bold text-black dark:text-indigo-500">
                  455
                </span>
              </p>
              <p class="flex flex-col">
                Rating
                <span class="font-bold text-black dark:text-indigo-500">
                  9.3
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between gap-4 mt-6">
        <button
          type="button"
          class="w-1/2 px-4 py-2 text-base bg-white border rounded-lg text-grey-500 hover:bg-gray-200 "
        >
          Chat
        </button>
        <button
          type="button"
          class="w-1/2 px-4 py-2 text-base text-white bg-indigo-500 border rounded-lg hover:bg-indigo-700 "
        >
          Add friend
        </button>
      </div>
      <Gallery></Gallery>
    </div>
  );
};

export default UserProfile;

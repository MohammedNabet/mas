// src/components/UserProfile.js

import React from "react";
import Gallery from "./Gallery";

function UserProfile() {
  return (
    <div class="bg-white shadow-lg rounded-2xl  ">
      <br />
      <br />
      <br />
      <div class="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
        <div class="w-full pt-1 mx-auto -mt-16 text-center">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="./r.jpeg"
              class="mx-auto object-cover rounded-full h-20 w-20 "
            />
          </a>
        </div>
        <div class="w-full">
          <div class="mb-6 text-center">
            <p class="text-xl font-medium text-gray-800 dark:text-white">
              John Jackson
            </p>
            <p class="text-xs text-gray-400">FullStack dev</p>
          </div>
          <div class="w-full p-2 mb-4 bg-pink-100 rounded-lg dark:bg-white">
            <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
              <p class="flex flex-col">
                Art.
                <span class="font-bold text-black dark:text-indigo-500">
                  34
                </span>
              </p>
              <p class="flex flex-col">
                Foll.
                <span class="font-bold text-black dark:text-indigo-500">
                  455
                </span>
              </p>
              <p class="flex flex-col">
                Rat.
                <span class="font-bold text-black dark:text-indigo-500">
                  9.3
                </span>
              </p>
            </div>
          </div>
          <button
            type="button"
            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Add
          </button>
        </div>
      </div>

      
      <Gallery></Gallery>
    </div>
  );
}

export default UserProfile;

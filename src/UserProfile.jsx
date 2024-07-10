import React from "react";
import Posthome from "./Posthome";
import { SlPicture } from "react-icons/sl";


function UserProfile() {
  return (
    <div className="bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col justify-center items-center my-5">
        <div
          className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full"
          style={{
            backgroundImage: "url('./maslogo.jpg')",
          }}
        ></div>
        <span className="my-3">
          @_Club_Mas
          <div className="relative">
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="absolute bottom-2 left-28 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-black rounded-full fill-current"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
            </svg>
          </div>
        </span>

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

        <div className="flex">
          <button className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400">
            Edit profile
          </button>
        </div>

        <p className="mb-3 text-center">
          Maghreb Association Sportive de Fès ⚫️🟡
          <br />
          <p className="text-xs text-center	">
            مرحبا بكم بالصفحة الرسمية لنادي المغرب الرياضي الفاسي <br />
            Bienvenue sur La Page Officielle du MAS🐯
          </p>
        </p>
      </div>
      <div class="flex m-2">
        <div class="flex-none w-14 ...">
          <img
            alt="profile"
            src="./maslogo.jpg"
            className="mx-auto object-cover rounded-full h-10 w-10"
          />
        </div>
        <div class="flex-initial w-64 ...">
          <div className="flex justify-center items-center  bg-gray-100">
            <input
              type="text"
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              placeholder="Enter text here"
            />
          </div>
        </div>
        <div class="flex-initial w-32 ...">
          <SlPicture className="h-6 w-6 m-2 relative -right-4 " />
        </div>
      </div>
      <Posthome />
    </div>
  );
}

export default UserProfile;

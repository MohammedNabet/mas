import React from "react";
import Slider from "react-slick";
import "./Home.css";
import Publication from "./Publication";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";



const Home = ({ user }) => {
  const [statusUsers, setStatusUsers] = React.useState([
    {
      id: 1,
      name: "User 1 large name",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    // ... other users
  ]);

  const [posts, setPosts] = React.useState([
    {
      id: 1,
      userId: 1,
      username: "User 1",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
      date: "May 18, 2023",
      description: "This is a post description",
      imageUrl: "./mas.jpg",
    },
    {
      id: 2,
      userId: 2,
      username: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar6.png",
      date: "May 17, 2023",
      description: "Another post",
      imageUrl: null,
    },
    // ... other posts
  ]);

  const UserListItem = ({ user }) => (
    <div className="userItem">
      <img src={user.avatarUrl} alt="Avatar" className="avatar" />
      <span className="statusUserName">{user.name}</span>
    </div>
  );

  const PostCard = ({ post }) => (
    <div className="postCard">
      <div className="postHeader">
        <img src={post.avatarUrl} alt="Avatar" className="postAvatar" />
        <span className="postUsername">{post.username}</span>
        <span className="postDate">{post.date}</span>
      </div>
      <p className="postDescription">{post.description}</p>
      {post.imageUrl && (
        <img src={post.imageUrl} alt="Post" className="postImage" />
      )}
      <div className="postFooter">
        <button className="postButton">Like</button>
        <button className="postButton">Comment</button>
        <button className="postButton">Share</button>
      </div>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <nav class="flex flex-wrap items-center justify-between p-4 bg-white">
        <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
          <a class="text-xl font-semibold text-gray-800 font-heading" href="#">
            MasApp
          </a>
        </div>
        <div class="block lg:hidden">
          <div className="flex ">
            <IoNotificationsSharp className="mb-1 text-4xl	 text-gray-500 mt-1 p-2" />

            <FaMessage className="mb-1 text-4xl	 text-gray-500 mt-1 p-2" />
          </div>
        </div>
        <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
          <a
            class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Home
          </a>
          <a
            class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Team
          </a>
          <a
            class="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Galery
          </a>
        </div>
        <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
          <a
            class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Content
          </a>
          <a
            class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            FAQ
          </a>
          <a
            class="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Contact
          </a>
        </div>
      </nav>

      <br />
      <div className="userContainer">
        {statusUsers.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>

      <br />
      <Publication></Publication>

      <div class="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl  md:flex-row">
        <div class="relative">
          <img
            src="./sto.png"
            class="w-full rounded-xl md:w-auto md:max-h-40"
          />
          <span class="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
            7 min
          </span>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex items-start justify-between my-2 text-gray-700  md:m-0">
            <p class="text-xl leading-5">
              How to travel arround the world without any money
            </p>
            <button class="text-red-400 hover:text-red-600">
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center my-2 text-xs text-gray-500  md:m-0">
            <svg
              width="10"
              height="10"
              fill="currentColor"
              class="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path>
            </svg>
            123,344,893 views
            <svg
              width="10"
              height="10"
              fill="currentColor"
              class="ml-6 mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"></path>
            </svg>
            45 876 likes
          </div>
          <div class="flex items-start my-2 md:m-0">
            <div class="relative">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="./r.jpeg"
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <svg
                width="10"
                height="10"
                fill="currentColor"
                class="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
              </svg>
            </div>
            <div class="flex flex-col items-start justify-center ml-2">
              <span class="flex items-center text-sm text-gray-600 ">
                Charlie Rabiller
                <span class="block w-2 h-2 ml-1 bg-green-500 rounded-full"></span>
              </span>
              <span class="text-xs text-gray-400">1 week ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl  md:flex-row">
        <div class="relative">
          <img src="./TT.jpg" class="w-full rounded-xl md:w-auto md:max-h-40" />
          <span class="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
            7 min
          </span>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex items-start justify-between my-2 text-gray-700 ">
            <p class="text-xl leading-5">Qatar 2024 / FIFA</p>
            <button class="text-red-400 hover:text-red-600">
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center my-2 text-xs text-gray-500  md:m-0">
            <svg
              width="10"
              height="10"
              fill="currentColor"
              class="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path>
            </svg>
            123,344,893 views
            <svg
              width="10"
              height="10"
              fill="currentColor"
              class="ml-6 mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"></path>
            </svg>
            45 876 likes
          </div>
          <div class="flex items-start my-2 md:m-0">
            <div class="relative">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="./r.jpeg"
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <svg
                width="10"
                height="10"
                fill="currentColor"
                class="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
              </svg>
            </div>
            <div class="flex flex-col items-start justify-center ml-2">
              <span class="flex items-center text-sm text-gray-600 ">
                Charlie Rabiller
                <span class="block w-2 h-2 ml-1 bg-green-500 rounded-full"></span>
              </span>
              <span class="text-xs text-gray-400">1 week ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl  md:flex-row">
        <div class="relative">
          <img src="./P.jpeg" class="w-full rounded-xl md:w-auto md:max-h-40" />
          <span class="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
            7 min
          </span>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex items-start justify-between my-2 text-gray-700  md:m-0">
            <p class="text-xl leading-5">Qatar 2024 / FIFA</p>
            <button class="text-red-400 hover:text-red-600">
              <svg
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center my-2 text-xs text-gray-500  md:m-0">
            <svg
              width="10"
              height="10"
              fill="currentColor"
              class="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path>
            </svg>
            123,344,893 views
            <svg
              width="10"
              height="10"
              fill="currentColor"
              class="ml-6 mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"></path>
            </svg>
            45 876 likes
          </div>
          <div class="flex items-start my-2 md:m-0">
            <div class="relative">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="./r.jpeg"
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </a>
              <svg
                width="10"
                height="10"
                fill="currentColor"
                class="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
              </svg>
            </div>
            <div class="flex flex-col items-start justify-center ml-2">
              <span class="flex items-center text-sm text-gray-600 ">
                Charlie Rabiller
                <span class="block w-2 h-2 ml-1 bg-green-500 rounded-full"></span>
              </span>
              <span class="text-xs text-gray-400">1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
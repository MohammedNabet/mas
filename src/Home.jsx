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
      id: 3,
      name: "User 3",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar3.png",
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
      <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
        <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
          <a
            className="text-xl font-semibold text-gray-800 font-heading"
            href="#"
          >
            MasApp
          </a>
        </div>
        <div className="block lg:hidden">
          <div className="flex">
            <IoNotificationsSharp className="mb-1 text-4xl text-gray-500 mt-1 p-2" />
            <FaMessage className="mb-1 text-4xl text-gray-500 mt-1 p-2" />
          </div>
        </div>
        <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Home
          </a>
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Team
          </a>
          <a
            className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Gallery
          </a>
        </div>
        <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Content
          </a>
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            FAQ
          </a>
          <a
            className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
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
      <Publication />

      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img
                src="./all.jpeg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
              </div>
            </div>
            <div className="text-gray-500 cursor-pointer">
              <button className="hover:bg-gray-50 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-800">
              Just another day with adorable kittens! 🐱{" "}
              <a href="#" className="text-blue-600">
                #CuteKitten
              </a>
              <a href="#" className="text-blue-600">
                #AdventureCat
              </a>
            </p>
          </div>
          <div className="mb-4">
            <img
              src="./sto.png"
              alt="Post Image"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-2">
              <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>42 Likes</span>
              </button>
            </div>
            <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                ></path>
              </svg>
              <span>3 Comments</span>
            </button>
          </div>
          <hr className="mt-2 mb-2" />
          <p className="text-gray-800 font-semibold">Comment</p>
          <hr className="mt-2 mb-2" />
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <img
                src="./all.jpeg"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">Jane Smith</p>
                <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <img
                src="./all.jpeg"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">Bob Johnson</p>
                <p className="text-gray-500 text-sm">
                  I can't handle the cuteness! Where can I get one?
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 ml-6">
              <img
                src="https://placekitten.com/40/40"
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">
                  That little furball is from a local shelter. You should check
                  it out! 🏠😺
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

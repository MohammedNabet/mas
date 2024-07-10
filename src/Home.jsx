import React from "react";
import Slider from "react-slick";
import "./Home.css";
import Publication from "./Publication";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import Posttext from "./Posttext";
import Posthome from "./Posthome";
import Formationclub from "./Formationclub";
import { SlPicture } from "react-icons/sl";

const Home = ({ user }) => {
  const [statusUsers, setStatusUsers] = React.useState([
    {
      id: 1,
      name: "Club Mas",
      avatarUrl: "./maslogo.jpg",
    },
    {
      id: 2,
      name: "Raje Club",
      avatarUrl: "./rajae.jpg",
    },

    {
      id: 2,
      name: "club WAC",
      avatarUrl: "./wedad.jpg",
    },
    {
      id: 2,
      name: "WIRT",
      avatarUrl: "./tanja.jpg",
    },
    {
      id: 2,
      name: "Manchester",
      avatarUrl: "./man.jpg",
    },
    {
      id: 2,
      name: "ASFAR",
      avatarUrl: "./far.jpg",
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
            ScoreSphere
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
 <div className="userContainer">
        {statusUsers.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
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
     
      <Publication></Publication>

      <Posthome></Posthome>
    </div>
  );
};

export default Home;

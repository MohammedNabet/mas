import React from "react";
import Slider from "react-slick";
import "./Home.css";

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
      
      <br />
      <div className="userContainer">
        {statusUsers.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>

      <div className="postListContainer">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;

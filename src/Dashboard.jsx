import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import UserProfile from "./UserProfile";
import Home from "./Home";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", label: "Home", icon: FaHome },
    { name: "Profile", label: "Profile", icon: FaUser },
    { name: "Settings", label: "Settings", icon: FaCog },
  ];

  const user = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Software Engineer at ABC Corp. Loves coding and coffee.",
  };

  return (
    <div
    
    >
      {activeTab === "Profile" ? (
        <UserProfile user={user} />
      ) : (
        <Home user={user} />
      )}
      <TabNavigation tabs={tabs} onTabClick={setActiveTab} />
    </div>
  );
};

export default Dashboard;

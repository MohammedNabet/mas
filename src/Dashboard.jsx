import React, { useState, useEffect } from "react";
import TabNavigation from "./TabNavigation";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import UserProfile from "./UserProfile";

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
      className={`min-h-screen git branch
flex flex-col items-center justify-center transition-colors duration-5000 relative`}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-20">
        {activeTab}
      </h1>
      {activeTab === "Profile" ? (
        <UserProfile user={user} />
      ) : (
        <div className="text-center">
          <p className="text-lg">Content for {activeTab}</p>
        </div>
      )}
      <TabNavigation tabs={tabs} onTabClick={setActiveTab} />
    </div>
  );
};

export default Dashboard;

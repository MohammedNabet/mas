// Dashboard.js

import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import UserProfile from "./UserProfile";
import Home from "./Home";
import Service from "./Service";
import { FaMessage } from "react-icons/fa6";
import Message from "./Message";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", label: "Home", icon: FaHome },
    { name: "Profile", label: "Profile", icon: FaUser },
    { name: "Message", label: "Message", icon: FaMessage},
    { name: "Settings", label: "Settings", icon: FaCog },
  ];

  const user = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Software Engineer at ABC Corp. Loves coding and coffee.",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <UserProfile user={user} />;
      case "Settings":
        // Implement Settings component or page
        return <Service user={user} />;
      case "Message":
        // Implement Settings component or page
        return <Message user={user} />;
      case "Home":
      default:
        return <Home user={user} />;
    }
  };

  return (
    <div className="relative min-h-screen pb-16">
      <div className="tab-content transition-all duration-300">
        {renderTabContent()}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-2 rounded-t-lg shadow-lg flex justify-around">
        {tabs.map((tab) => (
          <TabNavigation
            key={tab.name}
            isActive={activeTab === tab.name}
            icon={tab.icon}
            label={tab.label}
            onClick={() => setActiveTab(tab.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

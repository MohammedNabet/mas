import React, { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; // Import icons from react-icons

const TabNavigation = ({ tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    onTabClick(tab.name);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 py-2 flex justify-around">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`py-2 px-4 text-sm md:text-base text-white flex flex-col items-center ${
            activeTab === tab.name ? "bg-gray-600" : "bg-gray-800"
          } rounded`}
          onClick={() => handleTabClick(tab)}
        >
          <tab.icon className="mb-1" />
          <span className="text-xs">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;

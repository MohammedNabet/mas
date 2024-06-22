import React, { useState } from "react";

const TabNavigation = ({ tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 py-2 flex justify-around">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 text-sm md:text-base text-white ${
            activeTab === tab ? "bg-gray-600" : "bg-gray-800"
          } rounded`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;

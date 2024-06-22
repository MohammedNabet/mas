import React, { useState, useEffect } from "react";
import TabNavigation from "./TabNavigation";

const Dashboard = () => {
  const [color, setColor] = useState("bg-yellow-500");
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const colors = ["bg-yellow-500", "bg-white-500"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setColor(colors[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const tabs = ["Home", "Profile", "Settings"];

  return (
    <div
      className={`min-h-screen ${color} flex flex-col items-center justify-center transition-colors duration-5000 relative`}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-20">
        {activeTab}
      </h1>
      <TabNavigation tabs={tabs} onTabClick={setActiveTab} />
    </div>
  );
};

export default Dashboard;

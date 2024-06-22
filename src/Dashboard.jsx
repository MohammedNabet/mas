import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [color, setColor] = useState("bg-yellow-500");

  useEffect(() => {
    const colors = ["bg-yellow-500", "bg-white-500"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setColor(colors[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`min-h-screen ${color} flex items-center justify-center transition-colors duration-5000`}
    >
      <h1 className="text-4xl font-bold text-gray-900">MAS-APP</h1>
    </div>
  );
};

export default Dashboard;

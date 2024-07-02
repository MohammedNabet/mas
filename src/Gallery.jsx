// src/components/Gallery.js

import React, { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Nature", "Animals", "Architecture"];

  const photos = [
    { src: "https://via.placeholder.com/150", category: "Nature" },
    { src: "https://via.placeholder.com/150", category: "Animals" },
    { src: "https://via.placeholder.com/150", category: "Architecture" },
    { src: "https://via.placeholder.com/150", category: "Nature" },
    { src: "https://via.placeholder.com/150", category: "Animals" },
    { src: "https://via.placeholder.com/150", category: "Architecture" },
    { src: "https://via.placeholder.com/150", category: "Nature" },
    { src: "https://via.placeholder.com/150", category: "Animals" },
    { src: "https://via.placeholder.com/150", category: "Architecture" },
    { src: "https://via.placeholder.com/150", category: "Nature" },
    // Add more photos as needed
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Photo Gallery
      </h3>
      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            className="w-full h-32 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={photo.src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

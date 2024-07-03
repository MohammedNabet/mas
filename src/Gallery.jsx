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
      <section>
        <div className="px-2 py-6 mx-auto lg:px-16">
          <div className="mx-auto text-center">
            <div className="grid grid-cols-5 gap-3 mx-auto lg:grid-cols-5">
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg"
                  alt="Figma"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg"
                  alt="Framer"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg"
                  alt="Sketch"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg"
                  alt="Sketch"
                />
              </div>
              <div>
                <img
                  className="h-4 mx-auto lg:h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
                  alt="Invision"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Photo Gallery
      </h3>
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

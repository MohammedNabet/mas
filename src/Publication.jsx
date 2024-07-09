import Slider from "react-slick";
import React from "react";

export default function Publication() {
  const [publication, setPublication] = React.useState([
    {
      id: 1,
      title: "Coupe du Monde 2026",
      img: "./coup2026.png",
      pay1: "./canada.jpg",
      pay2: "./amec.jpeg",
      pay3: "./mex.jpeg",
    },
    {
      id: 2,
      title: "Premier League",
      img: "./an1.png",
      pay1: "./angla.jpeg",
      pay2: "",
      pay3: "",
    },

    {
      id: 2,
      title: "La Liga",
      img: "./l01.png",
      pay1: "./ispan.jpeg",
      pay2: "",
      pay3: "",
    },

    // ... other posts
  ]);

  return (
    <div className="userContainer">
      {publication.map((user) => (
        <div key={user.id} className="publication w-80 m-2">
          <div className="relative p-4 overflow-hidden bg-white shadow-lg rounded-2xl w-80">
            {user.img && (
              <img
                alt="moto"
                src={user.img}
                className="absolute w-auto h-36 mb-2 -right-24 -bottom-0"
              />
            )}
            <div className="w-4/6">
              <p className="mb-2 text-lg font-medium text-gray-800">
                {user.title}
              </p>
              <p className="text-xs text-gray-400">
                Detail is not an obsession, it is the very essence of
                perfection.
              </p>

              <br />
              <div className="flex -space-x-2">
                {user.pay1 && (
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                      src={user.pay1}
                      alt="Jade"
                    />
                  </a>
                )}
                {user.pay2 && (
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                      src={user.pay2}
                      alt="Jade"
                    />
                  </a>
                )}
                {user.pay3 && (
                  <a href="#" className="">
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                      src={user.pay3}
                      alt="Jade"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

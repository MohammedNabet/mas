import React from "react";

const matchData = [
  {
    id: 1,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./maslogo.jpg",
    imageSrc2: "./far.jpg",
  },
  {
    id: 2,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./canada.jpg",
    imageSrc2: "./brazil.jpeg",
  },
  {
    id: 3,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./tanja.jpg",
    imageSrc2: "./far.jpg",
  },
  {
    id: 3,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./wedad.jpg",
    imageSrc2: "./maslogo.jpg",
  },
  {
    id: 1,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./maslogo.jpg",
    imageSrc2: "./far.jpg",
  },
  {
    id: 2,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./canada.jpg",
    imageSrc2: "./brazil.jpeg",
  },
  {
    id: 3,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./tanja.jpg",
    imageSrc2: "./far.jpg",
  },
  {
    id: 3,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./wedad.jpg",
    imageSrc2: "./maslogo.jpg",
  },
  {
    id: 1,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./maslogo.jpg",
    imageSrc2: "./far.jpg",
  },
  {
    id: 2,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./canada.jpg",
    imageSrc2: "./brazil.jpeg",
  },
  {
    id: 3,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./tanja.jpg",
    imageSrc2: "./far.jpg",
  },
  {
    id: 3,
    date: "12 - 12 - 2024",
    email: "12 : 00 pm",
    imageSrc1: "./wedad.jpg",
    imageSrc2: "./maslogo.jpg",
  },
];

function MatchList() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            List Match
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {matchData.map((match) => (
              <li key={match.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={match.imageSrc1}
                      alt="Match logo"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {match.date}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {match.email}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={match.imageSrc2}
                      alt="Opponent logo"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MatchList;

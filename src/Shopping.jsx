import React, { useState } from "react";

export default function Shopping() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      prix: "123 dh",
      price: 259.0,
      quantity: 2,
      image: "./maroc.jpg",
    },
    {
      id: 2,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      price: 259.0,
      quantity: 2,
      image: "./reayal.jpeg",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={item.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <div className="flex">
                    <h1>
                      <img
                        src="./all.jpeg"
                        alt=""
                        className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                      />
                    </h1>
                    <p className="mt-1 text-xs text-gray-700 p-2">
                      {item.size}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <h2 className="text-lg  text-gray-900">
                      {item.prix}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{item.price} ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() =>
                        setCartItems(cartItems.filter((i) => i.id !== item.id))
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

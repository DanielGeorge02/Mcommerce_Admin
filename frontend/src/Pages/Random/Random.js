/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Random.css";
const Random = () => {
  return (
    <div className="desktop w-full h-screen absolute">
      <div className="h-[600px] w-11/12 max-w-[800px]  flex flex-col justify-evenly bg-white relative top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-3xl">
        <div className="w-4/5 flex items-center justify-between ">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Full Name:</h1>
          <input
            type="text"
            placeholder="    Full Name"
            className="h-[50px] w-1/2 border border-gray-400 rounded-full"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <h1 className="text-xl text-right text-gray-600 w-2/5">
            Phone Number:
          </h1>
          <input
            type="text"
            placeholder="    Phone Number"
            className="h-[50px] w-1/2 border border-gray-400 rounded-full"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Email Id:</h1>
          <input
            type="text"
            placeholder="    Email"
            className="h-[50px] w-1/2 border border-gray-400 rounded-full"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <h1 className=" text-xl text-right text-gray-600 w-2/5">
            Converse to:
          </h1>
          <select className="h-[50px]  w-1/2  border border-gray-400 rounded-full">
            <option value="User"> User</option>
            <option value="Gaurdian">Gaurdian</option>
            <option value="Doctor">Doctor</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="w-4/5 flex items-center justify-between rounded-full">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Content:</h1>
          <input
            type="text"
            placeholder="    Content"
            className="h-[50px] w-1/2 border border-gray-400 rounded-full"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between ">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Link:</h1>
          <input
            type="text"
            placeholder="    Link"
            className="h-[50px] w-1/2 border border-gray-400 rounded-full"
          />
        </div>
        <div className="w-1/1 flex justify-center items-center ">
          <button className="border w-36 h-10 border-blue-500 rounded-3xl drop-shadow-2xl hover:bg-blue-600 hover:text-white ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Random;

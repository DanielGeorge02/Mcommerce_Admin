/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Random.css";
const Random = ({ api }) => {
  const [name, setName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [conveyto, setConveyTo] = useState();
  const [description, setDescription] = useState();
  const [link, setLink] = useState();

  const sendQuery = async () => {
    try {
      if (!name && !phoneNo && !email && !conveyto && !description && !link) {
        alert("Please fill all the fields");
      } else {
        await api
          .post("/queries", {
            name: name,
            phoneNo: phoneNo,
            email: email,
            conveyto: conveyto,
            description: description,
            link: link,
            status: "waiting",
          })
          .then((response) => {
            alert("Query Sent Successfully");
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="desktop w-full h-screen absolute">
      <h1 className="text-white text-6xl text-center">SEND QUERY</h1>
      <div className="h-[600px] w-11/12 max-w-[800px]  flex flex-col justify-evenly bg-white relative top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-3xl">
        <div className="w-4/5 flex items-center justify-between ">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Full Name:</h1>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="    Full Name"
            className="h-[50px] w-1/2 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <h1 className="text-xl text-right text-gray-600 w-2/5">
            Phone Number:
          </h1>
          <input
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            type="text"
            placeholder="    Phone Number"
            className="h-[50px] w-1/2 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Email Id:</h1>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="    Email"
            className="h-[50px] w-1/2 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between">
          <h1 className=" text-xl text-right text-gray-600 w-2/5">
            Converse to:
          </h1>
          <select
            onChange={(e) => {
              setConveyTo(e.target.value);
            }}
            className="h-[50px] px-3 text-gray-600  w-1/2  border border-gray-400 rounded-lg"
          >
            <option value="user"> User</option>
            <option value="gaurdian">Gaurdian</option>
            <option value="doctor">Doctor</option>
            <option value="vendor">Pharmacist</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="w-4/5 flex items-center justify-between rounded-lg">
          <h1 className="text-xl text-right text-gray-600 w-2/5">
            Description:
          </h1>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="    Description"
            className="h-[50px] w-1/2 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="w-4/5 flex items-center justify-between ">
          <h1 className="text-xl text-right text-gray-600 w-2/5">Link:</h1>
          <input
            onChange={(e) => {
              setLink(e.target.value);
            }}
            type="text"
            placeholder="    Link"
            className="h-[50px] w-1/2 border border-gray-400 rounded-lg"
          />
        </div>
        <div className="w-1/1 flex justify-center items-center ">
          <button
            onClick={sendQuery}
            className="border w-36 h-10 border-blue-500 rounded-3xl drop-shadow-2xl hover:bg-blue-600 hover:text-white "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Random;

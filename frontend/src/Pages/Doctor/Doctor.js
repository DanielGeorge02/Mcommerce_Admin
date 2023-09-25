import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";

const Doctor = ({ api }) => {
  const [allUsers, setAllUsers] = useState();
  const [users, setUsers] = useState();
  const [doctors, setDoctors] = useState();
  const [vendors, setVendors] = useState();

  const getUsers = async () => {
    await api.get("/users/all").then((res) => {
      setAllUsers(res.data);
      setUsers(
        res.data.filter((user) => {
          return user.userType === "user";
        })
      );
      setDoctors(
        res.data.filter((user) => {
          return user.userType === "doctor";
        })
      );
      setVendors(
        res.data.filter((user) => {
          return user.userType === "vendor";
        })
      );
    });

    // await api.get("/users/user").then((res) => {
    //   setUsers(res.data);
    // });
    // await api.get("/users/doctor").then((res) => {
    //   setDoctors(res.data);
    // });
    // await api.get("/users/vendor").then((res) => {
    //   setVendors(res.data);
    // });
  };
  return (
    <div className="grid w-fit h-screen">
      <Navbar active="doctor" />
      {/* <button
        onClick={() => {
          getUsers();
        }}
        className="bg-blue-600 w-48 px-4 py-2 m-6 outline-none border-none rounded-xl"
      >
        Get Users
      </button> */}
      {/* 
      <section className="grid gap-5">
        <h1 className="font-bold text-3xl">Doctors:</h1>
        <table className=" ">
          <thead>
            <tr className="grid grid-cols-6 place-items-center">
              <th className="w-full border border-black">Name</th>
              <th className="w-full border border-black">Phone</th>
              <th className="w-full border border-black">Register Number</th>
              <th className="w-full border border-black">Specialization</th>
              <th className="w-full border border-black">Status</th>
               <th className="w-full border border-black">{""}</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((user) => {
              return (
                <tr className="grid grid-cols-6">
                  <td className="w-full border border-black">{user.name}</td>
                  <td className="w-full border border-black">{user.phoneNo}</td>
                  <td className="w-full border border-black">{user.reg_no}</td>
                  <td className="w-full border border-black">
                    {user.specialization}
                  </td>
                  <td className="w-full border border-black">{user.status}</td>
                  <td className="grid  grid-cols-2 gap-5 px-5">
                    <button
                      onClick={() => {
                        api.put("/users", {
                          phoneNo: user.phoneNo,
                          status: "verified",
                        });
                      }}
                      className="bg-lime-500 px-4 py-2  outline-none border-none rounded-xl"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        api.put("/users", {
                          phoneNo: user.phoneNo,
                          status: "waiting",
                        });
                      }}
                      className="bg-red-600 px-4 py-2  outline-none border-none rounded-xl"
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="grid gap-5">
        <h1 className="font-bold text-3xl">Vendors</h1>
        <table className=" ">
          <thead>
            <tr className="grid grid-cols-6 place-items-center">
              <th className="w-full border border-black">Name</th>
              <th className="w-full border border-black">Phone</th>
              <th className="w-full border border-black">GST Number</th>
              <th className="w-full border border-black">Specialization</th>
              <th className="w-full border border-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {vendors?.map((user) => {
              return (
                <tr className="grid grid-cols-6">
                  <td className="w-full border border-black">{user.name}</td>
                  <td className="w-full border border-black">{user.phoneNo}</td>
                  <td className="w-full border border-black">{user.gst_no}</td>
                  <td className="w-full border border-black">
                    {user.specialization}
                  </td>
                  <td className="w-full border border-black">{user.status}</td>
                  <td className="grid  grid-cols-2 gap-5 px-5">
                    <button className="bg-lime-500 px-4 py-2  outline-none border-none rounded-xl">
                      Approve
                    </button>
                    <button className="bg-red-600 px-4 py-2  outline-none border-none rounded-xl">
                      Deny
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="grid gap-5">
        <h1 className="font-bold text-3xl">Doctors</h1>
        <table className=" ">
          <thead>
            <tr className="grid grid-cols-6 place-items-center">
              <th className="w-full border border-black">Name</th>
              <th className="w-full border border-black">Phone</th>
              <th className="w-full border border-black">Register Number</th>
              <th className="w-full border border-black">Specialization</th>
              <th className="w-full border border-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((user) => {
              return (
                <tr className="grid grid-cols-6">
                  <td className="w-full border border-black">{user.name}</td>
                  <td className="w-full border border-black">{user.phoneNo}</td>
                  <td className="w-full border border-black">{user.reg_no}</td>
                  <td className="w-full border border-black">
                    {user.specialization}
                  </td>
                  <td className="w-full border border-black">{user.status}</td>
                  <td className="grid  grid-cols-2 gap-5 px-5">
                    <button className="bg-lime-500 px-4 py-2  outline-none border-none rounded-xl">
                      Approve
                    </button>
                    <button className="bg-red-600 px-4 py-2  outline-none border-none rounded-xl">
                      Deny
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section> */}
    </div>
  );
};

export default Doctor;

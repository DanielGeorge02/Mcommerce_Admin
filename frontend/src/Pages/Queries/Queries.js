import React, { useEffect, useState } from "react";
// import "./Doctors.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Input, Space, Select, Drawer } from "antd";
import { MdVerifiedUser } from "react-icons/md";
import { CiNoWaitingSign } from "react-icons/ci";

const Queries = ({ api }) => {
  const { Search } = Input;
  const dropdown = ["Name", "Email", "Location", "Status"];
  const [queries, setQueries] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  const getUsers = async () => {
    await api.get("/queries").then((res) => {
      setQueries(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-full h-screen bg-[#F1F5F9] absolute">
      <Navbar active="doctor" />
      <section className="w-full max-w-[1200px] rounded-md h-32 mx-auto mt-10 p-5 flex flex-col justify-between bg-white">
        <h1 className="text-xl">Queries Database</h1>
        <div className="flex gap-6">
          <button className="text-sm bg-[#DBEAFE] p-3">All</button>
          <button className="text-sm">New Users</button>
          <button className="text-sm">Approved</button>
          <button className="text-sm">Not Approved</button>
        </div>
      </section>
      <section className="w-full max-w-[1200px] rounded-md h-[500px] mx-auto mt-10 p-7 flex flex-col justify-between bg-white">
        <div className="w-full flex items-center gap-5 border">
          <Search
            className="w-full max-w-[200px]  rounded-lg border-gray-700"
            placeholder="Search"
            // onSearch={onSearch}
          />
          <Select
            defaultValue={dropdown[0]}
            style={{
              width: 120,
            }}
            // onChange={handleProvinceChange}
            options={dropdown.map((province) => ({
              label: province,
              value: province,
            }))}
          />
          <p className="text-sm">Displaying 100 details</p>
        </div>
        <div className="w-full h-96 border">
          <table className="w-full">
            <thead className="w-full">
              <tr className="w-full grid grid-cols-5 place-items-center bg-blue-700 font-medium text-lg tracking-wider h-8">
                <th className="font-normal text-white">Name</th>
                <th className="font-normal text-white">Phone No</th>
                <th className="font-normal text-white">Description</th>
                <th className="font-normal text-white">User</th>
                <th className="font-normal text-white">Status</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {queries?.map((user) => {
                console.log(user);
                return (
                  <tr
                    onClick={() => {
                      setOpen(true);
                      setData(user);
                    }}
                    className="w-full grid grid-cols-5 place-items-center h-fit cursor-pointer"
                  >
                    <td className="font-normal text-black">{user.name}</td>
                    <td className="font-normal text-black">{user.phoneNo}</td>
                    <td className="font-normal text-black">
                      {user.description}
                    </td>
                    <td className="font-normal text-black">{user.conveyto}</td>
                    <td className=" w-full grid place-items-center">
                      {user.status === "verified" ? (
                        <p className="text-lime-600 text-xl flex grid-cols-2 place-items-center font-bold">
                          <MdVerifiedUser /> <p>Verified</p>
                        </p>
                      ) : (
                        <p></p>
                      )}
                      {user.status === "waiting" ? (
                        <p className="text-red-600 text-xl flex grid-cols-2 place-items-center font-bold">
                          <CiNoWaitingSign />
                          <p>Waiting</p>
                        </p>
                      ) : (
                        <p></p>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <div className="w-full h-fit my-6 grid grid-cols-2">
          <h1 className="text-xl">Name:</h1>
          <p className="pl-10 text-lg">{data?.name}</p>
        </div>
        <div className="w-full h-fit my-6 grid grid-cols-2">
          <h1 className="text-xl">Phone:</h1>
          <p className="pl-10 text-lg">{data?.phoneNo}</p>
        </div>
        <div className="w-full h-fit my-6 grid grid-cols-2">
          <h1 className="text-xl">Description:</h1>
          <p className="pl-10 text-lg">{data?.description}</p>
        </div>
        <div className="w-full h-fit my-6 grid grid-cols-2">
          <h1 className="text-xl">User:</h1>
          <p className="pl-10 text-lg">{data?.conveyto}</p>
        </div>
        <div className="w-full h-fit my-6 grid grid-cols-2">
          <h1 className="text-xl">Link:</h1>
          <a href={data?.link} className="pl-10 text-lg text-blue-600">{data?.link}</a>
        </div>
        <div className="w-full h-fit my-6 grid grid-cols-3">
          <h1 className="text-xl">Status:</h1>
          {data?.status === "verified" ? (
            <p className="text-lime-600 text-xl flex grid-cols-2 place-items-center font-bold">
              <MdVerifiedUser /> <p>Verified</p>
            </p>
          ) : (
            <p></p>
          )}
          {data?.status === "waiting" ? (
            <p className="text-red-600 text-xl flex grid-cols-2 place-items-center font-bold">
              <CiNoWaitingSign />
              <p>Waiting</p>
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <div className="w-full grid place-items-center">
          {data?.status === "waiting" ? (
            <button
              onClick={() => {
                api
                  .put("/users", { phoneNo: data?.phoneNo, status: "verified" })
                  .then(() => {
                    setOpen(false);
                    setData([]);
                    getUsers();
                  });
              }}
              className="bg-lime-500 text-white px-8 py-2 mt-5"
            >
              Approve
            </button>
          ) : (
            <button></button>
          )}
          {data?.status === "verified" ? (
            <button
              onClick={() => {
                api
                  .put("/users", { phoneNo: data?.phoneNo, status: "waiting" })
                  .then(() => {
                    setOpen(false);
                    setData([]);
                    getUsers();
                  });
              }}
              className="bg-red-700 text-white px-8 py-2 mt-5"
            >
              Forbid
            </button>
          ) : (
            <button></button>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Queries;

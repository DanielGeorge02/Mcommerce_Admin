import React, { useEffect, useState } from "react";

const Dashboard = ({ api }) => {
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

  useEffect(() => {
    console.table(allUsers, users, doctors, vendors);
  }, [allUsers]);
  return (
    <div>
      <button
        onClick={() => {
          getUsers();
        }}
        className="bg-blue-600 px-4 py-2 m-6 outline-none border-none"
      >
        Get Users
      </button>

      <h1>Doctors</h1>
      {users?.map((user) => {
        return (
          <table>
            <thead>
              <tr>Name</tr>
            </thead>
          </table>
        );
      })}
    </div>
  );
};

export default Dashboard;

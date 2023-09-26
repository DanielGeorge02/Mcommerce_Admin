/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Line, Doughnut } from "react-chartjs-2";
import home from "../../assets/Home.svg";
import user from "../../assets/user.svg";
import guardian from "../../assets/guardian.svg";
import doctor from "../../assets/doctor.svg";
import pharmacy from "../../assets/pharmacy.svg";
import logout from "../../assets/logout.svg";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Avatar } from "antd";
import { Tooltip } from "react-tooltip";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
  BarElement,
  ArcElement,
} from "chart.js";

chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
  Tooltip,
  BarElement,
  ArcElement
);

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "Apr", "may", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Users",
        data: [27, 28, 29, 30, 27, 29, 31, 28, 32],
        backgroundColor: ["rgba(137, 196, 244,0.5)"],
        borderColor: " rgba(113, 184, 240, 1) ",
        fill: true,
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };
  const options1 = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: true,
    },
    enabled: true,
    scales: {
      y: {
        min: 20,
        max: 35,
        beginAtZero: true,
        title: {
          display: true,
          text: "No. of Users",
          color: "black",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  return (
    <div className="bg-[#D0E0F3] h-screen w-screen flex items-center">
      <div className="w-24">
        <Navbar />
      </div>

      <div className="flex flex-col w-[90%]  h-[100%]">
        {" "}
        <div className="w-[100%] h-[40%]  flex flex-col justify-evenly">
          <div className="w-[90%] max-w-[1200px] flex flex-row mx-auto justify-between">
            <h1 className="text-[30px] mt-10 ml- text-[#0075FF] font-bold ">
              DashBoard
            </h1>
            <div className="flex flex-row mt-10 w-[200px] justify-evenly items-center">
              {" "}
              <Avatar
                style={{ backgroundColor: "orangered" }}
                size="large"
                gap={2}
              >
                {user}
              </Avatar>
              <h1 className="text-[20px] font-bold ">Daniel George</h1>
            </div>
          </div>

          <div className="flex flex-row w-[100%] h-[70%] justify-around items-center">
            <div className="flex flex-row w-[65%] ml-11   justify-evenly">
              <div className="w-[150px] h-[180px] bg-white flex drop-shadow-2xl py-3 flex-col justify-around items-center rounded-3xl">
                {" "}
                <div className="h-[80px] w-[90%]  bg-[#63EDFF]  flex justify-around items-center rounded-lg">
                  {" "}
                  <img className="h-12 w-12 " src={user} />
                </div>
                <h1 className="text-[20px] text-gray-400 font-semibold">
                  User
                </h1>
                <h1 className="text-[30px] text-black font-bold">20002</h1>
              </div>
              <div className="w-[150px] h-[180px] bg-white flex flex-col drop-shadow-2xl py-3 justify-around items-center rounded-3xl">
                <div className="h-[80px] w-[90%] bg-[#36A2EB] flex justify-around items-center rounded-lg">
                  <img className="h-12 w-12 " src={guardian} />
                </div>
                <h1 className="text-[20px] text-gray-400 font-semibold">
                  Guardian
                </h1>
                <h1 className="text-[30px] text-black font-bold">21002</h1>
              </div>
              <div className="w-[150px] h-[180px] bg-white flex flex-col drop-shadow-2xl justify-around py-3  items-center rounded-3xl">
                {" "}
                <div className="h-[80px] w-[90%] bg-[#004FE3] flex justify-around items-center rounded-lg">
                  {" "}
                  <img className="h-12 w-12 " src={doctor} />
                </div>
                <h1 className="text-[20px] text-gray-400 font-semibold">
                  Doctor
                </h1>
                <h1 className="text-[30px] text-black font-bold">1095</h1>
              </div>
              <div className="w-[150px] h-[180px] bg-white flex flex-col drop-shadow-2xl justify-around  py-3 items-center rounded-3xl">
                {" "}
                <div className="h-[80px] w-[90%] bg-[#345695] flex justify-around items-center rounded-lg">
                  <img className="h-12 w-12 " src={pharmacy} />
                </div>
                <h1 className="text-[20px] text-gray-400 font-semibold">
                  Pharmacist
                </h1>
                <h1 className="text-[30px] text-black font-bold">2038</h1>
              </div>
            </div>

            <div className="h-[170px] w-[25%] mr-10 flex flex-col justify-evenly items-center rounded-3xl drop-shadow-2xl">
              <div className="w-[75%]">
                <div className="flex flex-row">
                  <div className="flex flex-row items-center h-[50px] mb-5  w-[220px] bg-white rounded-2xl">
                    <div className="h-[40px] aspect-square bg-[#ff424c] ml-4  flex justify-around items-center">
                      <img className="h-12 w-12 " src={doctor} />
                    </div>
                    <h1 className="text-[13px] ml-4 text-gray-400 font-semibold">
                      Doctor Pending Confirmation
                    </h1>
                  </div>
                  <div className="flex items-center justify-center h-[50px] ml-4 w-[50px] bg-white rounded-full">
                    <h1 className="text-[25px] text-black font-bold">21</h1>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center h-[50px] justify-center w-[220px] bg-white rounded-2xl">
                    <div className="h-[40px] aspect-square bg-[#ff424c] ml-4 flex justify-around items-center ">
                      <img className="h-12 w-12 " src={pharmacy} />
                    </div>
                    <h1 className="text-[13px] ml-4 text-gray-400 font-semibold">
                      Pharmacist Pending Confirmation
                    </h1>
                  </div>

                  <div className="flex items-center justify-center h-[50px]  ml-4 w-[50px] bg-white rounded-full">
                    <h1 className="text-[25px] text-black font-bold">31</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[60%] flex flex-row justify-center">
          <div className="w-[65%] h-[80%] flex flex-col">
            <div className="h-[25%] flex flex-col  bg-white drop-shadow-lg rounded-xl">
              <h1 className="text-[25px] ml-5 mt-2 text-black font-bold">
                User's Statistics
              </h1>
              <h1 className="ml-4">
                Statistics of users using Cathartic Gofer over the months
              </h1>
            </div>
            <div className="w-[100%] mt-6 h-[70%] bg-white drop-shadow-lg">
              <Line data={data} options={options}></Line>
            </div>
          </div>

          <div className="w-[25%] h-[80%] flex flex-col">
            <div className="h-[25%] flex flex-col ml-10  bg-white drop-shadow-lg rounded-xl">
              <h1 className="text-[25px] ml-5 mt-2 text-black font-bold">
                Subscription Overview
              </h1>
              <h1 className="ml-4">Overview of no.of users</h1>
            </div>
            <div className="h-[70%] mt-6 ml-10 bg-white drop-shadow-lg flex justify-center items-center">
              <Doughnut
                data={{
                  labels: ["Users", "Guardians", "Doctors", "Pharmacist"],
                  datasets: [
                    {
                      data: [50, 10, 90, 70],
                      backgroundColor: [
                        "#63EDFF",
                        "#36A2EB",
                        "#004FE3",
                        "#345695",
                      ],
                      hoverBackgroundColor: [
                        "#63EDFF",
                        "#36A2EB",
                        "#5680CE",
                        "#345695",
                      ],
                    },
                  ],
                }}
                width={400}
                height={400}
                options={options1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

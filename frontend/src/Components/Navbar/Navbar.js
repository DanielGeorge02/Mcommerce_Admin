import React from "react";
import home from "../../assets/Home.svg";
import user from "../../assets/user.svg";
import guardian from "../../assets/guardian.svg";
import doctor from "../../assets/doctor.svg";
import pharmacy from "../../assets/pharmacy.svg";
import logout from "../../assets/logout.svg";

export const Navbar = ({ active }) => {
  return (
    <div className="h-[90%] w-[100px] ml-5 my-auto bg-[#0075FF] rounded-3xl flex flex-col justify-between items-center">
      <div className="h-[60%] flex flex-col justify-between mt-4">
        <div className="w-[80px] h-[80px] flex items-center justify-center rounded-[25px]">
          <img className="h-11 w-11 " src={home} />
        </div>

        <div
          className={`"w-[80px] h-[80px]  bg-[#add1fa] rounded-3xl flex items-center justify-center ${active === "doctor"}"`}
        >
          <img className="h-12 w-12 " src={user} />
        </div>
        <div className="w-[80px] h-[80px] rounded-3xl flex items-center justify-center">
          <img className="h-12 w-12 " src={guardian} />
        </div>
        <div className="w-[80px] h-[80px] rounded-3xl flex items-center justify-center ">
          <img className="h-12 w-12 " src={doctor} />
        </div>
        <div className="w-[80px] h-[80px] rounded-3xl flex items-center justify-center ">
          <img className="h-12 w-12 " src={pharmacy} />
        </div>
      </div>

      <div className="mb-4">
        <img className="h-12 w-12 " src={logout} />
      </div>
    </div>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import home from "../../assets/Home.svg";
import user from "../../assets/user.svg";
import guardian from "../../assets/guardian.svg";
import doctor from "../../assets/doctor.svg";
import pharmacy from "../../assets/pharmacy.svg";
import logout from "../../assets/logout.svg";

export const Navbar = () => {
  return (
    <div className="h-[90%] w-24 ml-5 my-auto bg-[#0075FF] rounded-3xl flex flex-col justify-between items-center absolute left-5 top-1/2 -translate-y-1/2">
      <div className="h-[60%] flex flex-col justify-between mt-4">
        <div className="w-11 h-11 flex items-center justify-center rounded-[25px]">
          <img className="h-9 w-9 " src={home} />
        </div>

        <div className="w-12 h-12  bg-[#add1fa] rounded-3xl flex items-center justify-center">
          <img className="h-9 w-9 " src={user} />
        </div>
        <div className="w-11 h-11 rounded-3xl flex items-center justify-center">
          <img className="h-9 w-9 " src={guardian} />
        </div>
        <div className="w-11 h-11 rounded-3xl flex items-center justify-center ">
          <img className="h-9 w-9 " src={doctor} />
        </div>
        <div className="w-11 h-11  flex items-center justify-center ">
          <img className="h-9 w-9 " src={pharmacy} />
        </div>
      </div>

      <div className="mb-4">
        <img className="h-12 w-12 " src={logout} />
      </div>
    </div>
  );
};

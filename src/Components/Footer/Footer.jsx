import React from "react";

const Footer = () => {
  return (
    <div className="footer flex justify-between bg-[#a52525] p-6">
      <div>
        <h3 className="text-2xl text-white font-[550]">Crazy</h3>
        <p className="text-white text-[12px]"> &copy; copyright 2024</p>
      </div>

      <div className="text-[11px] text-slate-200">
        <div className="flex mx-3 justify-between ">
          <p>Home</p>
          <p>contact</p>
        </div>
        <div className="flex mx-3 justify-between ">
          <p className="mr-4">Instagram</p>
          <p>Linkedin</p>
        </div>
        <div className="flex mx-3 justify-between">
          <p>Adventures</p>
          <p>Travel</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

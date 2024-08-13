import React, { useState } from "react";
import "./nav.css";

const Nav = ({setOpen}) => {
  const [nav, setNav] = useState(false);

  const handleMenuClick = () => {
    setNav(!nav);
  };


  const openForm = ()=>{
    setOpen(true);
  }

  return (
    <nav className="navbar">
      <div className="title pl-[80px] mr-5">
        <h3 className="text-[20px] text-yellow-400 font-[550] uppercase">
          Crazy
        </h3>
      </div>
      <ul className={`list ${nav ? "active" : ""}`}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#places">
          <li>Services</li>
        </a>
        <a href="#map">
          <li>Community</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
          <button onClick={openForm} className="btn bg-yellow-400">Register</button>{" "}
      </ul>
      <div onClick={handleMenuClick} className="menu text-3xl cursor-pointer">
        <i className="bx bx-menu-alt-right text-white"></i>
      </div>
    </nav>
  );
};

export default Nav;

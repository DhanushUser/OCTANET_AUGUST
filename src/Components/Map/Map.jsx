import React from "react";
import "./map.css";
import map from "../../assets/3d-map.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Map = () => {
  return (
    <div className="map flex mt-[200px] rounded-sm bg-yellow-50 pt-10 justify-center items-center" id="map">
      <div className="locate-details  mb-[70px] text-center">
        <h1 className="text-3xl font-[550] uppercase">
          Start your new{" "}
          <span className="text-3xl font-[550] uppercase text-red-500">
            Adventure
          </span>{" "}
          <br />
          Around the world{" "}
          <img className="ml-[45%] my-[50px] " width={100} src={map} alt="" />
        </h1>


        <div data-aos='fade-right' className="lg:px-[200px] md:px-[150px] sm:px-[50px]  rounded-md p-6">
            <p className="text-[13px] bg-red-200 p-4 rounded-md border-l-[7px] border-yellow-500 bg-transparent">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fuga,
            nesciunt eligendi nisi placeat esse perferendis minus, officiis
            ducimus fugiat magni! Excepturi ea voluptates est ratione tempora
            aliquid aperiam optio.
            </p>
      </div>
      </div>

      
    </div>
  );
};

export default Map;

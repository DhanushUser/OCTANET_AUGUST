import React from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
  return (
    <div className="about my-10 py-10 bg-yellow-50 p-5" id="about">
      <div className="locate-detail mb-[70px] text-center">
        <h1 className="text-4xl font-[550] uppercase">
          Our{" "}
          <span className="text-4xl font-[550] uppercase text-red-500">
            Stories <i class="bx bxs-edit-location"></i>
          </span>{" "}
          with <br />
          Adventures
        </h1>
      </div>

      <div className="about-para my-6  w-full text-center px-[100px] lg:text-[14px] md:text-[13px] sm-text-[12px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
        voluptate. Velit sunt quibusdam voluptas. Incidunt fugit quod laudantium
        consectetur consequatur dolore totam odio nesciunt, culpa qui, impedit
        numquam nobis enim!
      </div>

      <div className="about-col text-center grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
        <div
          data-aos="fade-right"
          className="flex flex-col p-3 bg-orange-400 mx-4 mb-5 rounded-lg"
        >
          <h2 className="text-white text-2xl font-[550]">12k +</h2>
          <p className="text-[14px]">successful Journey</p>
        </div>
        <div
          data-aos="fade-top"
          className="flex flex-col p-3 bg-orange-400 mx-4 mb-5 rounded-lg"
        >
          <h2 className="text-white text-2xl font-[550]">16 +</h2>
          <p className="text-[14px]">Awards</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col p-3 bg-orange-400 mx-4 mb-5 rounded-lg"
        >
          <h2 className="text-white text-2xl font-[550]">20 +</h2>
          <p className="text-[14px]">Years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;

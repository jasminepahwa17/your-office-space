import React from "react";
import p1 from "../assets/photo1.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/p5.jpeg";
import p6 from "../assets/p6.jpeg";
import p7 from "../assets/p7.jpeg";
import p8 from "../assets/p8.jpeg";
// import p9 from "../assets/p9.jpeg"
import p10 from "../assets/p10.jpeg";
import p2 from "../assets/p2.jpeg";

const Gallery = () => {
  const imgs = [p2, p3, p4, p7, p8, p10, p6];
  return (
    <div className="flex flex-col items-center gap-12 lg:gap-24 px-6 md:px-20 lg:px-40  mb-12 ">
      <p className="lg:w-2/3 leading-3">
        <span className="text-lg lg:text-3xl font-semibold lg:font-bold">Welcome to Your Office Space</span>
        <br />
        <span className="italic text-xs lg:text-base ">
          Your Trusted Partner for finding best Co-Working and Managed Space
          Solutions.
        </span>
        <br />
      </p>
      {/* <p className="text-3xl font-bold">Gallery</p> */}
      <div className="grid grid-flow-row lg:grid-cols-2 h-full items-center justify-center flex-wrap gap-6">
        
        <p className="lg:text-2xl text-sm text-start ">       
          At <span className="lg:text-5xl text-lg font-bold">Your Office Rental</span>  we specialize in providing innovative consulting
          services for co-working and managed office spaces. Whether you’re a
          budding entrepreneur, an established enterprise, or a property owner
          looking to optimize your space, we help you to find best solutions to
          meet your unique needs.
        </p>
        <img className=" object-cover" src={p5} />
        {imgs.map((item, i) => (
          <img src={item} className="w-full h-full object-cover" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

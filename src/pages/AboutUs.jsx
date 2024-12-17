import React from "react";
import image from "../assets/p6.jpeg"

const AboutUs = () => {
  return (
    <div className="h-full min-h-screen gap-6 px-6 md:px-20 flex flex-col lg:flex-row items-center lg:items-start w-full  mb-12  lg:px-40">
    <div className="lg:w-2/3 order-1 lg:order-0 flex flex-col gap-5">
      <p className="font-bold text-2xl">About Us</p>
      <p className="text-start">
        Welcome to Office Oasis, your trusted partner in finding the ideal
        workspace solutions!
        At Office Oasis, we specialize in providing businesses with access
        to co-working spaces and managed office rentals that align perfectly
        with their operational needs and aspirations. As a premier brokerage
        company, we connect organizations of all sizes with flexible and fully
        equipped workspaces, empowering them to thrive in today’s dynamic
        business environment.
        <br />
        <br />
      </p>
      <p className="text-start">
        <span className="font-bold text-lg">Why Choose  Office Oasis?</span>
        <br /> <br/>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Extensive Network:</span> We collaborate with top-tier workspace providers,
            offering a wide selection of premium office spaces in prime
            locations.
          </li>
          <li>
          <span className="font-semibold">Customized Solutions:</span> Whether you’re a freelancer seeking a creative
            hub, a startup looking for scalability, or a large corporation
            needing managed office solutions, we tailor options to fit your
            requirements.
          </li>
          <li>
          <span className="font-semibold">Streamlined Process:</span> From exploring possibilities to finalizing
            agreements, we simplify every step of the journey, ensuring a
            hassle-free experience.
          </li>
          <li>
            <span className="font-semibold">Expert Guidance:</span> With deep industry insights, we offer personalized
            recommendations to help you make informed decisions.
          </li>
        </ul>
        <br/>
        At  Office Oasis, our mission is to redefine the way businesses
        discover and secure their perfect workspace. We bridge the gap between
        workspace providers and ambitious enterprises, fostering connections
        that drive success and innovation.
      </p>
      <br/>
      <p className="italic">
      Let Office Oasis help you find the space where your business can grow,
      collaborate, and succeed. <br/> <span className="font-bold">Your Space. Your Vision. Our Expertise.</span>
      </p>
    </div>
    <div className="lg:w-1/3 order-0 lg:order-1">
    <img className="lg:h-full lg:w-full h-80 w-[50rem] object-cover" src={image} />

    </div>

    </div>
  );
};

export default AboutUs;

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"
import Loader from "../components/Loader";
import image from "../assets/p3.jpeg"

const ContactForm = () => {
  const [value, setValue] = useState("");
  const formRef = useRef();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    cname: "",
    cemail: "",
    number: "",
    wtype: "",
    dcount: value,
    location: "",
    message: ""
  });
  

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const incrementValue = () => {
    const newValue = value === "" ? 1 : value + 1;
    updateDeskCount(newValue);
  };

  const decrementValue = () => {
    const newValue = value > 1 ? value - 1 : value;
    updateDeskCount(newValue);
  };

  const updateDeskCount = (newValue) => {
    setValue(newValue);
    setForm({
      ...form,
      dcount: newValue, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ylp8xfq',
        'template_e77h24p',
        {
          from_name: form.fname,
          to_name: "Your Office",
          from_email: form.cemail,
          to_email: "yourofficespaces@gmail.com",
          "First Name" : form.fname,
          "Last Name" : form.lname,
          "Company Name" : form.cname,
          "Company E-mail" : form.cemail,
          "Phone Number" : form.number,
          "Workplace type":form.wtype,
          "Desk Count":form.dcount,
          "Location":form.location,
          "Message" : form.message
        },
        'MqNW_6Dk2om_rWQV0'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            fname: "",
            lname: "",
            cname: "",
            cemail: "",
            number: "",
            wtype: "",
            dcount: "",
            location: "",
            message: ""
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 justify-center w-full mb-12 px-4 lg:px-40">
    <div className="order-1 lg:order-0  gap-4 w-full h-fit lg:w-1/2  md:w-1/2  flex flex-col ">
      <p className="lg:text-2xl text-lg">Got questions? We've got answers.</p>
      <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-6">
        <input
          name="fname"
          value={form.fname}
          onChange={handleChange}
          className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          placeholder="First Name*"
        />
        <input
          name="lname"
          value={form.lname}
          onChange={handleChange}
          className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          placeholder="Last Name*"
        />
        <input
          name="cname"
          value={form.cname}
          onChange={handleChange}
          className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          placeholder="Company Name*"
        />
        <input
          name="cemail"
          value={form.cemail}
          onChange={handleChange}
          className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          type="email"
          placeholder="Company E-mail address*"
        />
        <input
          name="number"
          value={form.number}
          onChange={handleChange}
          className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          type=""
          placeholder="Phone Number*"
        />
        <select
          className="p-4 w-full rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          name="wtype"
          onChange={handleChange}
          value={form.wtype}
        >
          <option disabled hidden value="">
            Workspace type*
          </option>
          <option value="Co-working" className="text-black">
            Co-working
          </option>
          <option value="Enterprise">Enterprise</option>
          <option value="Managed-office">Managed Office</option>
          <option value="Flexible">Flexible</option>
        </select>
        <div className="relative">
          <input
            className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 w-full appearance-none focus:outline-none focus:border-black custom-number-input"
            required
            placeholder="Desk count*"
            type="number"
            min="1"
            defaultValue=""
            value={value}
            onChange={(e) => updateDeskCount(Number(e.target.value) || "")}
          />
          <div className="absolute  inset-y-0 right-0 flex  justify-center items-center p-[1px]">
            <button
              className="w-16 h-full text-lg bg-gray-100 text-gray-700 border-x-[1px] border-gray-400 hover:bg-gray-300"
              type="button"
              onClick={incrementValue}
            >
              +
            </button>
            <button
              className="w-16 h-full  text-lg bg-gray-100  text-gray-700 rounded-r hover:bg-gray-300"
              type="button"
              onClick={decrementValue}
            >
              -
            </button>
          </div>
        </div>

        <select
          className="p-4 w-full rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
          required
          defaultValue=""
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
        >
          <option disabled hidden value="">
            Location*
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Noida">Noida</option>
          <option value="Delhi NCR">Delhi NCR </option>
          <option value="Faridabad">Faridabad </option>
          <option value="Ghaziabad">Ghaziabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="p-4 rounded-md border-[1px] border-gray-400 text-gray-700 placeholder:text-gray-700 appearance-none focus:outline-none focus:border-black"
                  placeholder="Message (optional)"
                  rows="4" cols="50"
        />

        <button type="submit" className="p-4 text-white bg-black rounded-lg flex justify-center items-center">{loading ? <Loader/> : "Submit"}</button>
      </form>
    </div>
    <div className="order-0 lg:order-1 lg:w-1/2 w-full lg:pt-12">
      <img src={image} className="" />
    </div>
    </div>
  );
};

export default ContactForm;

// pages/contact.js
import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) {
      valid = false;
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      valid = false;
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      formErrors.email = "Email is invalid";
    }
    if (!formData.budget) {
      valid = false;
      formErrors.budget = "Budget is required";
    }
    if (!formData.timeframe) {
      valid = false;
      formErrors.timeframe = "Timeframe is required";
    }
    if (!formData.message) {
      valid = false;
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setNotification("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setNotification("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          budget: "",
          timeframe: "",
          message: "",
        });
      } else {
        setNotification("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setNotification("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py-1 flex1'>
            <div className='left w-30'>
              <div className='contact-details'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+91-84848-75548</h3>
                  <span>Call us: Mon - Sat 10:00 - 18:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Nagpur</h3>
                  <span>301 Surya Kiran Complex, Abhyankar Nagar Square, Bajaj Nagar, Nagpur 440010</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>srikant@mgstuscon.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>srikant@mgstuscon.com</h3>
                  <span>Career at MGS</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form onSubmit={handleSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' name="email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Your budget</span>
                    <input type='number' name="budget" value={formData.budget} onChange={handleChange} required />
                    {errors.budget && <p className="error">{errors.budget}</p>}
                  </div>
                  <div className='inputs'>
                    <span>Timeframe</span>
                    <input type='date' name="timeframe" value={formData.timeframe} onChange={handleChange} required />
                    {errors.timeframe && <p className="error">{errors.timeframe}</p>}
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10' name="message" value={formData.message} onChange={handleChange} required></textarea>
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button className='button-primary' type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </form>
              {notification && <p className="notification">{notification}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

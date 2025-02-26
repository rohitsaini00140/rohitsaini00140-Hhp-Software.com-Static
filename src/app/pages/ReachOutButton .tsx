"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ReachOutButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    // url: window?.location?.href || "",
    url: "",
  });

  const handleClick = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, url: window.location.href }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.number.length < 5) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_ld3nu1k", // Your actual EmailJS Service ID
        "template_zup0kjb", // Your actual EmailJS Template ID
        {
          name: formData.name, // FIXED: Matches template variable
          email: formData.email,
          number: formData.number,
          message: formData.message,
          url: formData.url,
        },
        "Ie1b_OCo6c-l2SCkI", // Your Public Key
      );

      console.log(
        "✅ Email sent successfully!",
        response.status,
        response.text,
      );
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
        url: typeof window !== "undefined" ? window.location.href : "",
      });

      closePopup();
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="fixed left-0 top-2/4 z-[1000] -translate-y-1/2 transform cursor-pointer rounded-l-md bg-[#ff6600] px-1.5 py-2.5 text-center font-bold text-white [writing-mode:vertical-rl]"
      >
        REACH OUT
      </div>

      {isPopupOpen && (
        <div className="fixed left-1/2 top-1/2 z-50 w-3/4 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-5 shadow-lg sm:w-1/2">
          <h3 className="mb-2 flex justify-center font-extrabold">
            Contact Us
          </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mb-2.5 w-full rounded border border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mb-2.5 w-full rounded border border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label>Number:</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your number"
                className="mb-2.5 w-full rounded border border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block">Message:</label>
              <textarea
                name="message"
                placeholder="Your message"
                onChange={handleChange}
                value={formData.message}
                className="w-full rounded-lg border border-gray-300 p-2"
                required
              ></textarea>
            </div>

            <input type="hidden" name="url" value={formData.url} />
            <button
              type="submit"
              className="float-end flex cursor-pointer rounded-md border-none bg-[#37C2C2] px-2 py-1.5 text-sm text-white sm:px-4 sm:py-2 sm:text-[14px] md:px-8 md:py-2.5 md:text-[16px]"
            >
              Submit
            </button>
          </form>
          <button
            onClick={closePopup}
            className="absolute right-2.5 top-2.5 cursor-pointer border-none bg-transparent text-2xl font-bold text-[#ff6600]"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ReachOutButton;

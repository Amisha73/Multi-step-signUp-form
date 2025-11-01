// src/components/Step1.js -- Personal Information Step

import React, {useState} from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleNext = () => {
    const { fullName, email, phone } = formData;

    // Email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !phone) {
      setError("Please fill all the fields.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      nextStep();
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">
        Step 1: Personal Information
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/70"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/70"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-white/70"
        />
      </div>
      {error && (
        <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
      )}

      <button
        onClick={handleNext}
        className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
      >
        Next →
      </button>
    </div>
  );
};

export default Step1;

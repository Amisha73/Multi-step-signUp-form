// src/components/Step2.js -- Account Details Step

import React, { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNext = () => {
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      setError("⚠️ Please fill all the fields.");
    } else if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters.");
    } else if (password !== confirmPassword) {
      setError("⚠️ Passwords do not match.");
    } else {
      nextStep();
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">
        Step 2: Account Details
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 bg-white/70"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 bg-white/70"
          />
          <span
            className="absolute right-3 top-3 text-sm text-indigo-600 cursor-pointer select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 bg-white/70"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-6 py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Step2;

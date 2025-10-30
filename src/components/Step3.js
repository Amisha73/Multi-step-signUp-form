// src/components/Step3.js -- Review & Confirmation Step

import React from "react";

const Step3 = ({ formData, prevStep, nextStep }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">
        Step 3: Review & Confirm
      </h2>

      <div className="bg-white/70 rounded-lg p-4 shadow-inner mb-6">
        <p><strong>Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Username:</strong> {formData.username}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-6 py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-all"
        >
          ← Edit
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Submit ✅
        </button>
      </div>
    </div>
  );
};

export default Step3;

// src/components/ProgressBar.js -- Progress Bar Component

import React from "react";

const ProgressBar = ({ step }) => {
  const steps = [
    { id: 1, label: "Personal Info" },
    { id: 2, label: "Account Details" },
    { id: 3, label: "Review" },
    { id: 4, label: "Final Step" },
  ];

  // Dynamically calculate width based on step
  const progressWidth =
    step === 1
      ? "w-1/4"
      : step === 2
      ? "w-2/4"
      : step === 3
      ? "w-3/4"
      : "w-full";

  return (
    <div className="mb-8">
      <div className="relative flex items-center justify-between">
        {/* Base progress line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full transform -translate-y-1/2"></div>

        {/* Active progress line */}
        <div
          className={`absolute top-1/2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transform -translate-y-1/2 transition-all duration-500 ${progressWidth}`}
        ></div>

        {/* Step indicators */}
        {steps.map((item) => (
          <div
            key={item.id}
            className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 ${
              step >= item.id ? "text-indigo-600" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 font-semibold text-sm sm:text-base 
                ${
                  step >= item.id
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-transparent shadow-lg"
                    : "bg-white border-gray-300"
                }`}
            >
              {item.id}
            </div>
            <span className="text-[10px] md:text-xs md:block hidden mt-2 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

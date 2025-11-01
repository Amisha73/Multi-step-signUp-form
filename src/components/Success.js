// src/components/Success.js -- Signup Success Message Component

import React from "react";

const Success = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Signup Successful 🎉
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for signing up! You can now log in to your account.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;

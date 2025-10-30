import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Success from "./components/Success";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Floating background circles */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl bottom-10 right-10 animate-ping"></div>

      {/* Decorative image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
        alt="Signup Illustration"
        className="absolute w-24 top-10 right-10 opacity-90 animate-bounce-slow"
      />

      {/* Form Card */}
      <div className="relative bg-white/80 backdrop-blur-md shadow-2xl p-8 rounded-2xl w-[90%] max-w-md z-10 border border-white/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          Create Your Account ✨
        </h1>

        <ProgressBar step={step} />

        {/* Fade animation using Tailwind */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            step === 1 ? "opacity-100" : "opacity-0 absolute"
          }`}
        >
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            step === 2 ? "opacity-100" : "opacity-0 absolute"
          }`}
        >
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            step === 3 ? "opacity-100" : "opacity-0 absolute"
          }`}
        >
          {step === 3 && (
            <Step3
              formData={formData}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          )}
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            step === 4 ? "opacity-100" : "opacity-0 absolute"
          }`}
        >
          {step === 4 && <Success />}
        </div>
      </div>
    </div>
  );
};

export default App;

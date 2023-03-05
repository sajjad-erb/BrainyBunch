import React, { useState } from "react";

const TwoStepForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to server here
  };

  return (
    <div className="flex flex-col items-center">

      <div className="bg-gray-200 p-8 rounded-lg mt-8 w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Step {step}</h1>
        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="mb-4"
            />
            <button
              onClick={handleNextStep}
              disabled={!name}
              className={`px-4 py-2 rounded-lg ${!name ? "bg-gray-500 text-white cursor-not-allowed" : "bg-blue-500 text-white"
                }`}
            >
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="mb-4"
            />
            <button
              onClick={handlePreviousStep}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!email}
              className={`px-4 py-2 rounded-lg ${!email ? "bg-gray-500 text-white cursor-not-allowed" : "bg-blue-500 text-white"
                }`}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TwoStepForm;

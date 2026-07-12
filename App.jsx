import { useState } from "react";

import Layout from "./components/layout/Layout";

import PersonalInfo from "./components/steps/PersonalInfo";
import AccountDetails from "./components/steps/AccountDetails";
import Review from "./components/steps/Review";
import Success from "./components/steps/Success";

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
  console.log("Submitted Data:", formData);
  setStep(4);
};
  return (
    <Layout currentStep={step}>

      {step === 1 && (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

     {step === 2 && (
  <AccountDetails
    formData={formData}
    setFormData={setFormData}
    nextStep={nextStep}
    prevStep={prevStep}
  />
)}

    {step === 3 && (
  <Review
    formData={formData}
    prevStep={prevStep}
    handleSubmit={handleSubmit}
  />
)}

      {step === 4 && (
        <Success />
      )}

    </Layout>
  );
}

export default App;

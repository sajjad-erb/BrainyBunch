import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Flex from '../shared/Flex';
import Grid from '../shared/Grid';
import StepFormHeader from './Header';
import { ternary, equal } from '../util/javascript';

const Form = () => {
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
    <>
      <Flex extraClass={"flex-col items-center mt-10"}>
        <StepFormHeader step={step} />
      </Flex>


      <Grid extraClass={"grid grid-cols-2 mt-10"}>
        {ternary(equal(step, 1),
          <StepOne onEmailChange={handleEmailChange} nextButton={handleNextStep} onNameChange={handleNameChange} />,
          <StepTwo previousForm={handlePreviousStep} handleSubmit={handleSubmit} />,
        )}
      </Grid>

    </>
  );
}
export default Form;
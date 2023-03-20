import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Flex from '../shared/Flex';
import Grid from '../shared/Grid';
import StepFormHeader from './Header';
import { ternary, equal } from '../util/javascript';
import Flame from './Header/Flame';

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [developerNeeds, setDeveloperNeeds] = useState("")
  const [developerNeedSecond, setdeveloperNeedSecond] = useState("")
  const [selectLanguague, setSelectLanguague] = useState([])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddSelectedLanguagueIndex = (newValue) => {
    if (selectLanguague.length === 0) {
      setSelectLanguague([newValue])
    }
    else {
      if (selectLanguague.includes(newValue)) {
        setSelectLanguague(selectLanguague.filter((value) => value !== newValue));
      } else {
        setSelectLanguague([...selectLanguague, newValue]);
      }
    }
  }
  const handleDeveloperNeed = (e) => {
    setDeveloperNeeds(e.target.value)
  }

  const handleDeveloperNeedSecond = (e) => {
    setdeveloperNeedSecond(e.target.value)
  }

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


      {ternary(equal(step, 1),
        <Grid extraClass={"md:grid-cols-2 sm:grid-cols-1 mt-10"}>
          <StepOne onEmailChange={handleEmailChange} nextButton={handleNextStep} onNameChange={handleNameChange} name={name} email={email} />
        </Grid>,
        <Grid extraClass={"mt-10"}>
          <StepTwo previousForm={handlePreviousStep} handleSubmit={handleSubmit} selectedLanguagues={handleAddSelectedLanguagueIndex} selected={selectLanguague} onDeveloper={handleDeveloperNeed} onDeveloperSecond={handleDeveloperNeedSecond} parameter1={developerNeeds} parameter2={developerNeedSecond} />
        </Grid>,
      )}

    </>
  );
}
export default Form;
import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Image from '../shared/Image';
import Flex from '../shared/Flex';
import Grid from '../shared/Grid';

const Form = () => {
  return (
    <>
      <Flex extraClass={"justify-center mt-12"}>
        <Image src="logo.svg" alt="logo of brainy bunch" />
        <Image src="BRAINY BUNCH.svg" alt="text of brainy bunch" extraClassName={"mx-6"} />
      </Flex>


      <Grid extraClass={"grid grid-cols-2"}>
        <StepOne />
        <StepTwo />
      </Grid>

    </>
  );
}
export default Form;
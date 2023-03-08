import { Ellipse, EllipseNumberOne, EllipseNumberTwo, CenterBar, EllipseStepTwoCircle } from '@/assets/icons/StepFormHeader';
import React from 'react';
import Flex from '../../shared/Flex';
import Flame from './Flame';


const StepFormHeader = (props) => {
  return (
    <>
      <Flex extraClass={"justify-center items-center"}>
        <div className='relative'>
          <Flex extraClass={"bottom-0 z-0 items-center"}>
            <div className="absolute ml-28 top-0 z-10">
              <Ellipse />
            </div>
            <div className='absolute ml-36 z-10'>
              <EllipseNumberOne />
            </div>
            <Flame />
          </Flex>
        </div>
        <div className='relative'>
          <Flex extraClass={"items-center"}>
            <CenterBar />
          </Flex>
        </div>
        <div className='relative'>
          <Flex extraClass={`bottom-0 z-0 items-center ${props.step === 2 ? "" : "opacity-30"}`}>
            <div className="absolute ml-28 top-0 z-10">
              <EllipseStepTwoCircle />
            </div>
            <div className='absolute ml-36 z-10'>
              <EllipseNumberTwo />
            </div>
            <Flame />
          </Flex>
        </div>
      </Flex >
    </>);
}

export default StepFormHeader;
import React from 'react'
import { FlameLeft, FlameRight } from '@/assets/icons/StepFormHeader';

const Flame = () => {
  return (
    <>
      <div className='mt-2'>
        <FlameLeft />
      </div>
      <div className='ml-2 mt-2'>
        <FlameRight />
      </div>
    </>
  )
}

export default Flame;
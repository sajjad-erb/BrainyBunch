import classNames from 'classnames'
import React from 'react'

const Form = ({ handleSubmit, children, className, extraClassName }) => (
  <form
    onSubmit={handleSubmit}
    className={classNames('', extraClassName, { 'px-3 pb-4': className })}
  >
    {children}
  </form>
)

export default Form 

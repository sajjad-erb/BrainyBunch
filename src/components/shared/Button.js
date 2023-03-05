import classNames from 'classnames'
import React from 'react'

import { ternary } from '../util/javascript'

const Button = ({
  btnClassName,
  onClick,
  disabled,
  text,
  type = 'button',
}) => {
  return (
    <button
      className={classNames(
        'items-center',
        btnClassName,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
export default Button 

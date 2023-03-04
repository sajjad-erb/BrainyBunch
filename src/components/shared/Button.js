import classNames from 'classnames'
import React from 'react'

import { ternary } from '../util/javascript'

const Button = ({
  children,
  btnClassName,
  outlined,
  onClick,
  disabled,
  lableBoxBtn,
  type = 'button',
  filterSearch = null,
}) => {
  const searchViewButton = ternary(filterSearch, '', 'px-4')
  return (
    <button
      className={classNames(
        'focus:outline-none py-3 rounded-md shadow-xs',
        {
          'bg-white hover:bg-gray-100': lableBoxBtn,
        },
        {
          'bg-gray-100 text-gray-100 cursor-not-allowed border-gray-100':
            disabled,
        },
        {
          'border border-solid border-gray bg-white hover:bg-gray-100':
            outlined,
        },
        {
          'bg-coffee text-white hover:opacity-90':
            !outlined && !disabled && !lableBoxBtn,
        },
        btnClassName,
        searchViewButton,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button 

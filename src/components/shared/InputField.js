import classNames from 'classnames'
import React from 'react'

import { ternary } from '../util/javascript'
import Label from './Label'

const InputField = ({
  type,
  placeholder,
  labelName,
  name,
  value,
  onChange,
  checked,
  id,
  errorMessage,
  maxlength,
  inputClass,
  defaultValue,
  isHidden = false,
  accept,
  htmlFor,
  showLikeButton = false,
  disabled = false,
}) => (
  <>
    {ternary(
      labelName,
      <Label
        className={classNames('mb-2 block text-sm', {
          'border border-solid border-gray focus:outline-none py-3 px-6 rounded-md w-full block text-center text-sm cursor-pointer hover:bg-gray-100':
            showLikeButton,
        })}
        htmlFor={htmlFor}
      >
        {labelName}
      </Label>,
      null,
    )}
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        'border border-gray p-3 focus:outline-none rounded-md leading-none',
        inputClass,
        { hidden: isHidden },
      )}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      id={id}
      maxLength={maxlength}
      defaultValue={defaultValue}
      accept={accept}
      disabled={disabled}
    />
    <span className="text-red-700 mt-2 text-sm">{errorMessage}</span>
  </>
)

export default InputField 

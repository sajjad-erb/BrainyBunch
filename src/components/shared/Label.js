import React from 'react'

const Label = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
)

export default Label 

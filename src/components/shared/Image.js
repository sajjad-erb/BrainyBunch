import classNames from 'classnames'
import React from 'react'

const Image = ({
  src,
  alt,
  extraClassName,
  onClick,
  style,
  role = 'presentation',
  name,
  sizes,
  width,
  height,
  srcSet,
  onMouseEnter,
  onMouseLeave,
}) => (
  <img
    className={classNames('max-w-full', extraClassName)}
    {...{
      alt,
      src,
      style,
      onClick,
      role,
      name,
      sizes,
      width,
      height,
      srcSet,
      onMouseEnter,
      onMouseLeave,
    }}
    onKeyDown={onClick}
  />
)
export default Image
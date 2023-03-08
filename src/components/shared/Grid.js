import classNames from 'classnames'
import React from 'react'

const Grid = ({ children, extraClass }) => (
  <div className={classNames('grid', extraClass)}>
    {children}
  </div>
)

export default Grid 
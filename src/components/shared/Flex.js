import classNames from 'classnames'
import React from 'react'

const Flex = ({ children, extraClass }) => (
  <div className={classNames('flex', extraClass)}>
    {children}
  </div>
)

export default Flex 

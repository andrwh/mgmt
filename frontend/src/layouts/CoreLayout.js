import React from 'react'
import './CoreLayout.css'
import 'ace-css/css/ace.css'
// import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout

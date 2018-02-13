import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ myName, value }) => (
  <h1>
    {myName}: {value}
  </h1>
)

MyComponent.propTypes = {
  myName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default MyComponent
window.MyComponent = MyComponent

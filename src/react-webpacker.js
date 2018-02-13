import React from 'react'
import ReactDOM from 'react-dom'

export default {
  render() {
    document.querySelectorAll('div[data-component-name]').forEach(dom => {
      const componentName = dom.getAttribute('data-component-name')
      const component = window[componentName]
      if (!component)
        return console.error(
          `Component ${componentName} is not defined in window scope`
        )
      ReactDOM.render(
        React.createElement(
          component,
          JSON.parse(dom.getAttribute('data-props') || {})
        ),
        dom
      )
    })
  }
}

import React from 'react'
import ReactDOM from 'react-dom'

export default {
  render(components = window) {
    Array.from(document.querySelectorAll('div[data-component-name]')).forEach(
      dom => {
        const componentName = dom.getAttribute('data-component-name')
        const component = components[componentName]
        if (!component)
          return console.error(
            `Component ${componentName} is not defined`
          )
        ReactDOM.render(
          React.createElement(
            component,
            JSON.parse(dom.getAttribute('data-props') || {})
          ),
          dom
        )
      }
    )
  }
}

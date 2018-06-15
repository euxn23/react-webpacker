import React from 'react'
import ReactDOM from 'react-dom'

export function render(components = window) {
  Array.from(document.querySelectorAll('div[data-component-name]')).forEach(
    dom => {
      const componentName = dom.getAttribute('data-component-name')
      if (!componentName)
        return console.error('Component name is not defined in target DOM')
      const component = components[componentName]
      if (!component)
        return console.error(`Component ${componentName} is not defined`)
      ReactDOM.render(
        React.createElement(
          component,
          JSON.parse(dom.getAttribute('data-props') || '{}')
        ),
        dom
      )
    }
  )
}

const ReactWebpacker = { render }
export default ReactWebpacker

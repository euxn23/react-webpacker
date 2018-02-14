# React-Webpacker

React-Webpacker is the smallest, enoughly-tested library for react with webpacker.

## Features
- View Helper to render react component. (using Custom Data Attributes)
- JavaScript library to render react components, loading only used components.
- Enoughly view testing.
- **NOT Provide** Server-Side Rendering.

## Usage
- Add component to `window` scope.
```js
window.YourCoolComponent = YourCoolComponent
```

- Create JavaScript file to render components into webpacker target directory.
```js:react-webpacker.js
import ReactWebpacker from 'react-webpacker'

ReactWebpacker.render()
```

- Add View Helper and JavaScript tag.
    - From Ruby to JS, `snake_case` in props will be transformed to `camelCase` **AUTOMATICALLY**.
    - `react-webpacker` script should be called **ONCE** per rendered html page, **DON'T** call in looped views.
    - DOM is rendered in order from the top, so you should call `react-webpacker` script after `use_components` and `render_component`
```slim
= use_components(['YourCoolComponent'])
= render_component('YourCoolComponent', {props_object: :value})

= javascript_pack_tag 'react-webpacker' 
```

## Compared with `React-Rails` and `React on Rails`
- They provide JavaScript library to load **ALL COMPONENTS**, too heavy and harmful for browser performance.
- They provide Server-Side Rendering, so library is too large.
- They don't test JavaScript library about rendering by E2E testing.

## Supports
- Ruby 2.3.x+
- Webpacker 1.1+
- Node.js 8.x+

## License
MIT
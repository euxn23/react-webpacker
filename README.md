# React-Webpacker

React-Webpacker is the smallest, enoughly-tested library for react with webpacker.

## Features
- View Helper to render react component. (using Custom Data Attributes)
- JavaScript library to render react components, loading only used components.
- Enoughly view testing.
- **NOT Provide** Server-Side Rendering.

## Usage

### Notes
- From Ruby to JS, `snake_case` in props will be transformed to `camelCase` **AUTOMATICALLY**.
- `react-webpacker` script should be called **ONCE** per rendered html page, **DON'T** call in looped views.

### ES Modules Way Usage

your-view.js
```js
import ReactWebpacker from 'react-webpacker'
import YourCoolComponent from 'path/to/YourCoolComponent'

const components = {
  YourCoolComponent
}

ReactWebpacker.render(components)
```

your-view.html.erb
```erb
<%= javascript_pack_tag 'your-view', defer: true %>

<%= render_component('YourCoolComponent', {props_key: :value}) %>
```

### or Easy Usage

YourCoolComponent.js
```js
// Add component to `window` scope.
Object.assign(window, { YourCoolComponent })
```

react-webpacker.js
```js
import ReactWebpacker from 'react-webpacker'

ReactWebpacker.render()
```

your-view.html.erb
```erb
<%= use_components ['path/to/YourCoolComponent'], defer: true %>
<%= javascript_pack_tag 'react-webpacker', defer: true %>

<%= render_component('YourCoolComponent', {props_key: :value}) %>

```

#### Notes
- DOM is rendered in order from the top, so you should call `ReactWebpacker#render()` with `defer` attribute.
    - or after `render_component`
- You should call `ReactWebpacker#render()` after `use_components`, even if using `defer`.


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
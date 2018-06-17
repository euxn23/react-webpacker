declare module 'react-webpacker' {
  function render (components?: {
    [key: string]: any
  }): void
  const ReactWebpacker: {
    render: typeof render
  }
}

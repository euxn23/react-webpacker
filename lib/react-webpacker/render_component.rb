module ReactWebpacker
  # @param [String] component_name
  # @param [Hash] props
  def render_component(component_name, props = {})
    html_options = {
      'data-component-name' => component_name,
      'data-props' => props.map { |k, v| [k.to_s.camelize(:lower), v] }.to_h.to_json
    }
    content_tag('div', '', html_options).html_safe
  end
end

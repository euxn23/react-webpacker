module ReactWebpacker
  # @param [String] component_name
  # @param [Hash] props
  def render_component(component_name, props = {})
    html_options = {
      'data-component-name' => component_name,
      'data-props' => props.deep_transform_keys { |key| key.to_s.camelize(:lower) }.to_json
    }
    content_tag('div', '', html_options).html_safe
  end
end

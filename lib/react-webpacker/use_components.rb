module ReactWebpacker
  # @param [Array<String>] components
  def use_components(components = [], options = {})
    components.map { |component| javascript_pack_tag component, options }
      .join("\n").html_safe
  end
end

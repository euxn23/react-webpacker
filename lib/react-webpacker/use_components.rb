module ReactWebpacker
  # @param [Array<String>] components
  def use_components(components = [])
    components.map { |component| javascript_pack_tag component }
      .join("\n").html_safe
  end
end

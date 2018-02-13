require 'byebug'
require 'minitest/autorun'
require 'rails'
require 'rails/test_help'
require 'react-webpacker'
require 'webpacker'
require 'active_support/core_ext/string'

class ReactWebpackerTest < ActionView::TestCase
  tests ReactWebpacker
  include Webpacker::Helper

  def test_use_components
    pack_tag_stub = Proc.new do |arg|
      "<script src=\"/packs/#{arg}.js\"></script>"
    end
    File.open 'test/use-components_expected.html' do |f|
      stub('javascript_pack_tag', pack_tag_stub) do
        components = ['components/MyComponent']
        expect_tags = f.read.chomp
        assert_equal expect_tags, use_components(components)
      end
    end
  end

  def test_render_component
    File.open 'test/render-component_expected.html' do |f|
      component_name = 'MyComponent'
      props = {my_name: :test, value: 1}
      expect_tags = f.read.chomp
      assert_equal expect_tags, render_component(component_name, props)
    end
  end

  def test_version
    File.open('package.json') do |f|
      js_version = JSON.load(f)['version']
      ruby_version = ReactWebpacker::VERSION

      assert_equal js_version, ruby_version
    end
  end
end


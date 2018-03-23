$:.push File.expand_path('../lib', __FILE__)
require 'react-webpacker/version'

Gem::Specification.new do |s|
  s.name = 'react-webpacker'
  s.version = ReactWebpacker::VERSION
  s.authors = ['euxn23']
  s.email = 'euxn23@gmail.com'
  s.homepage = 'https://github.com/euxn23/react-webpacker'
  s.summary = 'The smallest, enoughly-tested library for react with webpacker.'
  s.license = 'MIT'
  s.required_ruby_version = '>= 2.3.0'

  s.require_paths = ['lib']

  s.files = `git ls-files`.split("\n")
end


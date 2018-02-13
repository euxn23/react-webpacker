module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: { implicitStrict: true, jsx: true }
  },
  plugins: ['standard', 'jest', 'prettier', 'react'],
  extends: [
    'standard',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'prettier/prettier': [
      2,
      {
        parser: 'flow',
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'no-process-env': 0,
    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'react/jsx-uses-vars': 2,
    'standard/computed-property-even-spacing': 0
  }
}

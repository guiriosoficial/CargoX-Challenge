module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    // 'plugin:vue/vue3-essential',
    // 'plugin:vue/strongly-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    camelcase: 'off',
    // 'vue/script-setup-uses-vars': 'error'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

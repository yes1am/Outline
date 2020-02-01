module.exports = {
  root: true,
  env: {
    "commonjs": true,
    "es6": true,
    "browser": true
  },
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "chrome": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 2018
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript/base'
  ],
  ignorePatterns: ["built", "dist", "node_modules/"],
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-alert": "off",
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines":  ["error", { "max": 1, "maxEOF": 1 }]
  }
}

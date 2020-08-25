module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      "createClass": "createReactClass",
      "pragma": "React",
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "env": {
    "browser": true,
    "jest": true 
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'comma-dangle': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': 1,
    'linebreak-style': [
      2,
      'unix'
    ],
    quotes: [
      2,
      'single'
    ],
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-first-prop-new-line': [
      1,
      'multiline'
    ],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': [
      2,
      2
    ],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 0,
    'react/no-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    semi: [
      'error',
      'never'
    ],
    'eol-last': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/display-name': 0,
    'react/prop-types': 0
  }
};

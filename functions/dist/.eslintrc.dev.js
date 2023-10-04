"use strict";

// module.exports = {
//   env: {
//     es6: true,
//     node: true
//   },
//   parserOptions: {
//     "ecmaVersion": 2018
//   },
//   "extends": ["eslint:recommended", "google"],
//   rules: {
//     "no-restricted-globals": ["error", "name", "length"],
//     "prefer-arrow-callback": "error",
//     "quotes": ["error", "double", {
//       "allowTemplateLiterals": true
//     }]
//   },
//   overrides: [{
//     files: ["**/*.spec.*"],
//     env: {
//       mocha: true
//     },
//     rules: {}
//   }],
//   globals: {}
// };


// module.exports = {
//   env: {
//     es6: true,
//     node: true,
//   },
//   parserOptions: {
//     ecmaVersion: 2018,
//   },
//   extends: ['eslint:recommended', 'google'],
//   rules: {
//     'no-restricted-globals': ['error', 'name', 'length'],
//     'prefer-arrow-callback': 'error',
//     quotes: ['error', 'double', { allowTemplateLiterals: true }],
//     'comma-dangle': ['error', 'always-multiline'], // Added trailing commas
//     'no-var': 'error', // Replace 'var' with 'let' or 'const' where needed
//     'require-jsdoc': [
//       'error',
//       {
//         require: {
//           FunctionDeclaration: true,
//           MethodDefinition: true,
//           ClassDeclaration: true,
//         },
//       },
//     ], // Added JSDoc rule
//   },
//   overrides: [
//     {
//       files: ['**/*.spec.*'],
//       env: {
//         mocha: true,
//       },
//       rules: {},
//     },
//   ],
//   globals: {},
// };

module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaVersion": 2018,
  },
  "extends": ["eslint:recommended", "google"],
  "rules": {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {
      "allowTemplateLiterals": true,
    }],
    "comma-dangle": ["error", "always-multiline"], // Added trailing commas
    "no-var": "error", // Replace 'var' with 'let' or 'const' where needed
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
        },
      },
    ], // Added JSDoc rule
  },
  "overrides": [
    {
      "files": ["**/*.spec.*"],
      "env": {
        "mocha": true,
      },
      "rules": {},
    },
  ],
  "globals": {},
};


module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.cjs', '.mjs'],
  },
  ignorePatterns: ['node_modules/', 'dist/', '.vscode/', 'src/generated/'],
  rules: {
    'no-console': 'off',
    'no-undef': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      files: '**/*.test.*',
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  env: {
    'jest/globals': true,
    es6: true,
    node: true,
  },
};

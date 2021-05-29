module.exports = {
  setupFilesAfterEnv: ['./.jest/setupTests.js'],

  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/.out/',
    '/public/',
    '/template/',
  ],
}

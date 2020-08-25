module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  setupFilesAfterEnv: [
    '<rootDir>/src/__test__/config/importJestDOM.ts',
    '<rootDir>/src/__test__/config/globals.ts',
  ],
}

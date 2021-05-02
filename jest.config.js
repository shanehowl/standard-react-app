// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  name: 'standard-react-app',
  verbose: false,
  testRegex: '.test.tsx',
  transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/reportWebVitals.ts',
    '!src/setupTests.ts',
    '!src/react-app-env.d.ts',
  ],
  coveragePathIgnorePatterns: ['node_modules', 'coverage'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {},
}

module.exports = config

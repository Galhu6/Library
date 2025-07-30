/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // או 'jsdom' אם אתה בודק קוד שרץ בדפדפן (React וכו')
  roots: ['<rootDir>/src'], // מקום קבצי המקור
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/__tests__/**/*.test.(ts|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  clearMocks: true,
  coverageDirectory: "coverage"
};

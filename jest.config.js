/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // או 'jsdom' אם אתה בודק קוד שרץ בדפדפן (React וכו')
  roots: ['<rootDir>/src','<rootDir>/tests'], // מקום קבצי המקור
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/tests/**/*.test.(ts|js)'],
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

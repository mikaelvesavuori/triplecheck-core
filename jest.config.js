module.exports = {
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
  collectCoverageFrom: ['src/*.ts', 'src/**/*.ts'],
  coveragePathIgnorePatterns: ['index.ts', '__quicktype-contract-*.ts', '__testdata__/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  testTimeout: 30000
};

import type { Config } from '@jest/types'

const baseConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/dist/', '<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true,
  cacheDirectory: '.jest-cache',
  coverageReporters: ['html', 'text'],
  testPathIgnorePatterns: ['/lib/', '/dist/', '/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.ts']
}

export default baseConfig

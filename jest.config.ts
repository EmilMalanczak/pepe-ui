import type { Config } from '@jest/types'

import baseConfig from './jest.config.base'

const config: Config.InitialOptions = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false
    }
  },
  roots: ['<rootDir>'],
  projects: ['<rootDir>/packages/*/jest.config.ts']
}

export default config

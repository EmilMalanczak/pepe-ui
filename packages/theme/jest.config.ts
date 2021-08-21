import type { Config } from '@jest/types'

import baseConfig from '../../jest.config.base'
import packageJson from './package.json'

const { name } = packageJson
const displayName = name.split('@pepe-ui/').pop()?.toUpperCase()

const config: Config.InitialOptions = {
  ...baseConfig,
  rootDir: '../..',
  roots: ['<rootDir>/packages/theme'],
  testEnvironment: 'jsdom',
  name,
  displayName
}

export default config

import { generateSpacing } from './spacing'
import type { SpacingParser } from './spacing'
import { generateMargin, generatePadding } from './box-property'

// https://www.measurethat.net/Benchmarks/Show/11037/0/double-tilde-vs-mathfloor
// eslint-disable-next-line no-bitwise
const DEFAULT_PARSER: SpacingParser = (value) => `${~~(value * 4)}px`

export const spacing = generateSpacing(DEFAULT_PARSER)

export const padding = generatePadding(spacing)
export const margin = generateMargin(spacing)

import type { SpacingValue, SpacingParser, Spacing } from './spacing.types'

export const generateSpacing = (parser: SpacingParser): Spacing => {
  const cache = new Map()

  const transform = (value: SpacingValue): SpacingValue => {
    const isCustomProperty = typeof value !== 'number'

    if (isCustomProperty) return value

    // check if that value was already calculated
    // reduction of unnessesary calculations and memory use
    const cachedValue = cache.get(value)

    if (cachedValue) {
      return cachedValue
    }

    // we are sure its a number due to prev check
    const valueToCache = parser(value as number)

    // save result to save it for further use
    cache.set(value, valueToCache)

    return valueToCache
  }

  return function spacing(...values) {
    if (values.length === 0) {
      return ''
    }

    return values.reduce(
      (css, value, idx) => `${css}${idx !== 0 ? ' ' : ''}${transform(value)}`,
      ''
    ) as string
  }
}

// https://www.measurethat.net/Benchmarks/Show/11037/0/double-tilde-vs-mathfloor
// eslint-disable-next-line no-bitwise
const DEFAULT_PARSER: SpacingParser = (value) => `${~~(value * 4)}px`

export const spacing = generateSpacing(DEFAULT_PARSER)

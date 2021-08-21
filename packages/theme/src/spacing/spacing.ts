import type { SpacingValue, SpacingParser, Spacing, SpacingArgLength } from './spacing.types'

export const generateSpacing = (parser: SpacingParser): Spacing => {
  const cache = new Map()

  const transform = (value: SpacingValue): SpacingValue => {
    if (!value) return ''

    const isUnitless = typeof value === 'number'

    if (!isUnitless) return value

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

  return function spacing(...values: SpacingArgLength) {
    return values.reduce(
      (css, value, idx) => `${css}${idx !== 0 ? ' ' : ''}${transform(value)}`,
      ''
    ) as string
  }
}

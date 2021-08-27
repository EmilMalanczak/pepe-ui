import { spacing as defaultSpacing, SpacingArgs } from '../spacing'
import type { BoxPropertyTransformer, GenerateBoxProperty } from './box-property.types'

const generateBoxProperty: GenerateBoxProperty = (property) => (spacing) => {
  const transform: BoxPropertyTransformer = (value, ...rest) => {
    if (typeof value === 'number' || typeof value === 'string') {
      const spacingArgs = [value, ...rest] as SpacingArgs
      // TODO: unexpected typing issue - probably bug comes
      // from FixedArraySize type
      return ` 
          ${property}: ${spacing(...(spacingArgs as any))};  
        `
    }

    if ('x' in value || 'y' in value) {
      const { x, y } = value

      return `
          ${property}: ${spacing(y ?? 0, x ?? 0)};
        `
    }

    return Object.entries(value).reduce(
      (css, [direction, propertyValue]) =>
        `
          ${css}
          ${property}-${direction}: ${spacing(propertyValue)}; 
        `,
      ''
    )
  }

  return transform
}

export const generatePadding = generateBoxProperty('padding')

export const generateMargin = generateBoxProperty('margin')

export const padding = generatePadding(defaultSpacing)
export const margin = generateMargin(defaultSpacing)

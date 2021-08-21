import type { BoxPropertyTransformer, GenerateBoxProperty } from './box-property.types'

const generateBoxProperty: GenerateBoxProperty = (property) => (spacing) => {
  const transform: BoxPropertyTransformer = (value) => {
    if (typeof value === 'number') {
      return `
          ${property}: ${spacing(value)}; 
        `
    }

    if ('x' in value || 'y' in value) {
      const { x, y } = value

      return `
          ${property}: ${spacing(x ?? 0, y ?? 0)};
        `
    }

    return Object.entries(value).reduce(
      (css, [direction, propertyValue]) =>
        `
          ${css}
          ${property}-${direction}: ${spacing(propertyValue)}  
        `,
      ''
    )
  }

  return (properties) => transform(properties)
}

export const generatePadding = generateBoxProperty('padding')

export const generateMargin = generateBoxProperty('margin')

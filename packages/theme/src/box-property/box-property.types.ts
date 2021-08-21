import type { Spacing, SpacingValue } from '../spacing'

type BoxProperty = 'margin' | 'padding'

type NotEmpty<T> = unknown extends T ? never : T

type AxisProperty = Partial<Record<'x' | 'y', SpacingValue>>

type SingleProperty = Partial<Record<'left' | 'top' | 'right' | 'bottom', SpacingValue>>

type BoxPropertyValue = NotEmpty<AxisProperty> | NotEmpty<SingleProperty> | number

export type BoxPropertyTransformer = (properties: BoxPropertyValue) => string

export type GenerateBoxProperty = (
  property: BoxProperty
) => (spacing: Spacing) => (value: BoxPropertyValue) => string

import type { Spacing, SpacingValue, SpacingArgs } from '../spacing'

type BoxProperty = 'margin' | 'padding'

type NotEmpty<T> = unknown extends T ? never : T

type AxisProperty = Partial<Record<'x' | 'y', SpacingValue>>

type SingleProperty = Partial<Record<'left' | 'top' | 'right' | 'bottom', SpacingValue>>

export type BoxPropertyValue = NotEmpty<AxisProperty> | NotEmpty<SingleProperty> | SpacingValue

export type BoxPropertyTransformer = (
  value: BoxPropertyValue | SpacingValue,
  ...rest: SpacingArgs
) => string

export type GenerateBoxProperty = (
  property: BoxProperty
) => (spacing: Spacing) => BoxPropertyTransformer

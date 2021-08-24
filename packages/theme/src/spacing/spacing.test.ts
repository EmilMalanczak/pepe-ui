import { generateSpacing, spacing } from './spacing'

describe('spacing theme util', () => {
  test('single argument', () => {
    expect(spacing(2)).toBe('8px')
    expect(spacing(10)).toBe('40px')
  })

  test('few arguments', () => {
    expect(spacing(2, 4)).toBe('8px 16px')
    expect(spacing(2, 4, 3)).toBe('8px 16px 12px')
    expect(spacing(2, 4, 1, 3)).toBe('8px 16px 4px 12px')
  })

  test('no arguments', () => {
    expect(spacing()).toBe('')
  })

  test('numbers below 0', () => {
    expect(spacing(2, -4)).toBe('8px -16px')
    expect(spacing(-4)).toBe('-16px')
  })

  test('not integer numbers', () => {
    expect(spacing(1.5)).toBe('6px')
    expect(spacing(2.25)).toBe('9px')
    expect(spacing(3.75)).toBe('15px')
  })

  test('string argument will be passed as is', () => {
    expect(spacing('20em')).toBe('20em')
  })

  test('custom parser', () => {
    const customSpacing = generateSpacing((val) => `${val + 2}rem`)

    expect(customSpacing(2)).toBe('4rem')
    expect(customSpacing(2.5)).toBe('4.5rem')
    expect(customSpacing(2, 4, 5)).toBe('4rem 6rem 7rem')
    expect(customSpacing()).toBe('')
    expect(customSpacing(2, -2)).toBe('4rem 0rem')
    expect(customSpacing('20px')).toBe('20px')
  })
})

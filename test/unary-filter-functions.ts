import { UFilter, TVFilter } from '../src/interfaces/functions'

describe('Unary filter, Typed Variatic Filter', () => {
  const factor:UFilter<number> = n => n * n
  const upCase:UFilter<string> = s => s[0].toUpperCase() + s.substring(1)
  const upCaser:UFilter<string[]> = pair => [pair[0], upCase(pair[1])]

  it('filters and returns a specified primitive type', () => {
    expect(factor(2)).toBe(4)
    expect(upCase('foo')).toBe('Foo')

    // ts should throw
    // factor('3')
    // factor(2, 3)
    // upCase(3)
  })

  it('can be coerced into a union type to make Unary more flexible', () => {
    const lengther: UFilter<string[] | string> = a => `length: ${a.length}`
    expect(lengther('a string')).toBe('length: 8')
    expect(lengther(['a', 'string'])).toBe('length: 2')
  })

  it('filters and returns an array', () => {
    // we can simply re-use our factor
    const arrayFactor:UFilter<number[]> = ary => ary.map(factor)
    expect(arrayFactor([1, 2, 3, 5])).toEqual([1, 4, 9, 25])

    // or our upCaser...
    expect(upCaser(['name', 'rob'])).toEqual(['name', 'Rob'])

    // ts should throw
    // arrayFactor(1)
    // arrayFactor([1, '2'])
  })

  it('operates on an object', () => {
    const propifier:UFilter<{ [key: string]: string }> = o =>
      Object.entries(o)
        .map(upCaser)
        .reduce((obj, ary) => { // see Binary Filter...
          obj[ary[0]] = ary[1]
          return obj
        }, {} as { [key: string]: string })

    expect(propifier({ firstName: 'rob', lastName: 'robbins' })).toEqual({ firstName: 'Rob', lastName: 'Robbins' })
  })

  it('takes an undertermined number of args, but of the same type', () => {
    const merge:TVFilter<string[]> = (a1, a2) => [...a1, ...a2]
    expect(merge(['fee', 'fi'], ['fo', 'fum'])).toEqual(['fee', 'fi', 'fo', 'fum'])

    // ts should throw
    // merge('this', ['is', 'wrong'])
    // merge(['this'], [2])
  })
})

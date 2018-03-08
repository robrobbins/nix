import { Filter as f} from '../src/functions'

describe('Unary filters', () => {
  const factor:f<number> = n => n * n
  const upCase:f<string> = s => s[0].toUpperCase() + s.substring(1)
  const upCaser:f<string[]> = pair => [pair[0], upCase(pair[1])]

  // simple dictionary type
  type dict = { [key: string]: string } 

  it('filters and returns a specified primitive type', () => {
    expect(factor(2)).toBe(4)
    expect(upCase('foo')).toBe('Foo')

    // ts should throw
    // factor('3')
    // factor(2, '3')
    // upCase(3)
  })

  it('can be coerced into a union type to make Unary more flexible', () => {
    const lengther:f<string[] | string, number> = a => a.length
    expect(lengther('a string')).toBe(8)
    expect(lengther(['a', 'string'])).toBe(2)
  })

  it('filters and returns an array', () => {
    // we can simply re-use our factor
    const arrayFactor:f<number[]> = ary => ary.map(n => factor(n))
    expect(arrayFactor([1, 2, 3, 5])).toEqual([1, 4, 9, 25])

    // or our upCaser...
    expect(upCaser(['name', 'rob'])).toEqual(['name', 'Rob'])

    // ts should throw
    // arrayFactor(1)
    // arrayFactor([1, '2'])
  })

  it('operates on an object', () => {
    // assure the value has first letter capitalized
    const propifier:f<dict> = o =>
      Object.entries(o)
        .map(ary => upCaser(ary))
        .reduce((obj, ary) => { // see Binary Filter...
          obj[ary[0]] = ary[1]
          return obj
        }, {} as dict)

    expect(propifier({ firstName: 'rob', lastName: 'robbins' })).toEqual({ firstName: 'Rob', lastName: 'Robbins' })
  })

  it('takes an undertermined number of args, but of the same type', () => {
    // input and output types do not need to match
    const merge:f<string[], string> = (a1, a2) => [...a1, ...a2].join(' ')
    expect(merge(['fee', 'fi'], ['fo', 'fum'])).toEqual('fee fi fo fum')

    // ts should throw
    // merge('this', ['is', 'wrong'])
    // merge(['this'], [2])
  })
})

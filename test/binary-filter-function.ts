import { Filter } from '../src/functions'

describe('Binary Filters', () => {
  // Note that if the input and return types are the same, you can omit the 2nd
  const product:Filter<number> = (n1, n2) => n1 * n2
  // In some cases, you may use a union as one of the types. We default the 2nd arg here
  // showing this binary filter being called as if it were unary is an option too...
  const lengther:Filter<string | string[], number> = (a, b='') => a.length + b.length

  it('can be a 2-input binary filter of the same type', () => {
    expect(product(10, 4)).toBe(40)
  })

  it('provides the ability for a binary filter to have different input/output types', () => {
    expect(lengther('two', 'strings')).toBe(10)
    // looks unary, but has defaulted 2nd arg...
    expect(lengther(['two', 'strings'])).toBe(2)
    expect(lengther('more than', ['two', 'strings'])).toBe(11)

    // passing a wrong type arg should ts throw
    // expect(lengther(123)).toBe(3)
  })
})

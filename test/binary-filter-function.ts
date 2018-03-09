import { Filter } from '../src/functions'

describe('Binary Filters', () => {
  // unary type, unary or binary function sig (as 2nd arg is defaulted)
  const product:Filter<number> = (n1, n2=1) => n1 * n2
  // In some cases, you may use a union as one of the types. We default the 2nd arg here
  // ternary type def, binary function arity (can be called as unary too as 2nd arg is defaulted)
  type lengthed = string | string[]
  const lengther:Filter<lengthed, lengthed, number> = (a, b='') => a.length + b.length

  it('can be a 2-input binary filter of the same type', () => {
    expect(product(10, 4)).toBe(40)
    // default arg lets you use it as unary
    expect(product(11)).toBe(11)
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

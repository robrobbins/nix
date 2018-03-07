import { Filter } from '../src/functions'

describe('Binary Filters', () => {
  // Note we default-val the 2nd arg here so that we don't have too in the body
  const product:Filter<number, number> = (n1, n2) => n1 * n2
  const lengther:Filter<string, number> = a => a.length

  it('can be a 2-input binary filter of the same type', () => {
    expect(product(10, 4)).toBe(40)
  })

  it('provides the ability for a binary filter to have different input/output types', () => {
    expect(lengther('a string')).toBe(8)

    // passing a wrong type arg should ts throw
    // expect(lengther(123)).toBe(3)
  })
})

import { BFilter, VFilter } from '../src/interfaces/functions'

describe('Binary Filters', () => {
  // Note we default-val the 2nd arg here so that we don't have too in the body
  const product:BFilter<number, number> = (n1, n2=1) => n1 * n2
  // this is an example of assuring the 2nd arg in the body...
  const sum:BFilter<number, number> = (n1, n2) => n1 + (n2 || 0)
  // an example of a binary filter using the 2nd type as a return, not an input (note the function input is unary)
  // this is how we can have unmatched input -> output and still be typed (vs using variadic)
  const lengther:BFilter<string, number> = a => a.length

  it('can be a 2-input binary filter of the same type', () => {
    expect(product(10, 4)).toBe(40)
  })

  it('provides the ability for a binary filter to have different input/output types', () => {
    // this works because, by passing only a single paramater to the function, you have one free for the return type
    expect(lengther('a string')).toBe(8)

    // passing a 2nd arg should ts throw
    // expect(lengther('foo', 'bar')).toBe(3)
  })
})

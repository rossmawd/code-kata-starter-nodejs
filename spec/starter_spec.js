const kataCode = require('../code/kata')

describe('A test suite', () => {
  let instance; 
  beforeEach(() => {
    instance = new kataCode;
  })

  it('should pass', () => {
    expect(true).toBe(true)
  })

  it('should behave...', () => {
    expect(instance.multiply(2)).toEqual(4)
  });
})

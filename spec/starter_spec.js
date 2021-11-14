const jaden = require('../code/jaden')

describe('A test suite', () => {
  let instance; 
  beforeEach(() => {
    instance = new jaden;
  })
  it('should pass', () => {
    expect(true).toBe(true)
  })

  it('should behave...', () => {
    expect(instance.multiply(2)).toEqual(4)

    // expect(jaden.multiply(2)).toEqual(4)
  });
})

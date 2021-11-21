const { jaden, two } = require("../code/kata");

describe("A test suite", () => {
  let myJaden;
  beforeEach(() => {
    myJaden = new jaden();
  });
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it('should capitalise "jeff" to "Jeff"', () => {
    expect(myJaden.jadenCase("jeff")).toEqual("Jeff");
  });

  it('"hello world" should be "Hello World"', () => {
    expect(myJaden.jadenCase("hello world")).toEqual("Hello World");
  });

  it("should deal with contractions", () => {
    expect(myJaden.jadenCase("no you aren't")).toEqual("No You Aren't");
  });
});

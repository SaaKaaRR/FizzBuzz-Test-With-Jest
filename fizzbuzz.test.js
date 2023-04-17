const { fizzbuzz } = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should return fizz if the number is divisible by 3", () => {
    const result = fizzbuzz(3);
    expect(result).toBe("fizz");
  });

  it("should return buzz if the number is divisible by 5", () => {
    const result = fizzbuzz(5);
    expect(result).toBe("buzz");
  });

  it("should return fizzbuzz if the number is divisible by both 3 and 5", () => {
    const result = fizzbuzz(15);
    expect(result).toBe("fizzbuzz");
  });

  it("should return the number if the number is neither divisible by 3 nor by 5", () => {
    const result = fizzbuzz(1);
    expect(result).toBe(1);
  });
});

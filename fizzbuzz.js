module.exports.fizzbuzz = function (number) {
  try {
    if (typeof number != "number") throw new Error("Input should be a number");
    if (number % 3 == 0 && number % 5 == 0) return "fizzbuzz";
    if (number % 3 == 0) return "fizz";
    if (number % 5 == 0) return "buzz";
    return number;
  } catch (error) {
    console.log(error);
  }
};

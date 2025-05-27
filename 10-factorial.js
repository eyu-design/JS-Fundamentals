function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const [, , arg] = process.argv;
const num = Number(arg);

console.log(factorial(isNaN(num) ? 1 : num));

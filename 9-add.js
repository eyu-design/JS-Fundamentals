function add(a, b) {
  return a + b;
}

const [, , arg1, arg2] = process.argv;

console.log(add(Number(arg1), Number(arg2)));

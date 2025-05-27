const [, , arg] = process.argv;
const num = Number(arg);

if (!isNaN(num) && Number.isInteger(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}

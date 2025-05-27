const [, , arg] = process.argv;
const sizegit  = Number(arg);

if (!Number.isInteger(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}

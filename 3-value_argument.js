
const [, , firstArg] = process.argv;

if (firstArg !== undefined) {
  console.log(firstArg);
} else {
  console.log("No argument");
}

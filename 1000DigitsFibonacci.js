let digitCounter = 0;
let first = 1,
  second = 1;

console.log(first);
console.log(second);

while (true) {
  let final = first + second;
  console.log(final);

  if (final.toString().length === 20) {
    break;
  }
  first = second;
  second = final;
}

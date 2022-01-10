// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];
// Write your solution below:
let check = "false";
for (let i = 0; i < array.length; i++) {
  // console.log(i);
  // console.log("-------");
  for (let j = 0; j < array.length; j++) {
    console.log(array[i], array[j]);
    console.log("-------");
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        check = "true";
      }
    }
  }
}
console.log(check);

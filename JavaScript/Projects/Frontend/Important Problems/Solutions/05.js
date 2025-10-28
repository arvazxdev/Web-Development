let arr = [0, 2, 5, 5, 6, -4];
function sumFunc(arr) {
    for (const key in arr) {
    const element = arr[key];
    if (element < 0) {
        var newArr = arr.splice(0, arr.findIndex(num => num < 0));
    }
}

let sum = newArr.reduce((a, b) => {
  return a + b;
}
)
console.log(sum)
}

sumFunc(arr)

// console.log(arr.findIndex(num => num < 0))

// let sum = arr.reduce((a, b) => {
//   return a + b;
// }
// )

// console.log(sum)

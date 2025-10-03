let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))


 
let numbers = [1, 2, 3, 4, 5] 
console.log(numbers.splice(1, 2))
console.log(numbers.splice(1, 3))
console.log(numbers.splice(1, 3, 222, 333))
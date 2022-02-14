import "./styles.css";

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original Array: " + arr);

let arrMap = arr.map((items) => items * 3);
console.log("multiplied*3: " + arrMap);

let arrEven = arr.filter((items) => items % 2 === 0);
console.log("Even Array: " + arrEven);

let arrOdd = arr.filter((items) => items % 2 !== 0);
console.log("Odd Array: " + arrOdd);

let arrSum = arr.reduce((result, items) => {
  return result + items;
}, 0);
console.log("Sum of all elements in the Array: " + arrSum);

let arrMul = arr.reduce((result, items) => {
  return result * items;
}, 1);
console.log("Multiplication of all elements in the Array: " + arrMul);

const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const squaredNum = numbers.map((num) => num * num);
console.log(squaredNum);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const addNum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(addNum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => console.log(num));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
console.log(numbers.find((el) => el === 1));
/**
 * some: Checks if at least one array element satisfies a condition.
 */
console.log(numbers.some((el) => el % 2 === 0));
/**
 * every: Checks if all array elements satisfy a condition.
 */
console.log(numbers.every((el) => el % 2 === 0));

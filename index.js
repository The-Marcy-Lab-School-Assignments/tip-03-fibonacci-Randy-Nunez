// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
    let firstNumber = 0;
    let secondNumber = 1;
    let sum;
    for (let i = 0; i < n; i++) {
        console.log(firstNumber)
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }
}

console.log("Example 1")
printFibonacci(5);  // should print 0, 1, 1, 2, 3
console.log("Example 2")
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

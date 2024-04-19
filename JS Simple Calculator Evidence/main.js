// Alexander Paryani
// 19 APR 2024
// JS Simple Calculator

// Input
console.log(`
Alexander Paryani
19 APR 2024
JS Simple Calculator
`);

const numberOne = parseInt(prompt("Enter your first number: "));
const numberTwo = parseInt(prompt("Enter second number: "));

// Process
const sumA = numberOne + numberTwo;
const sumS = numberOne - numberTwo;
const sumM = numberOne * numberTwo;
const sumD = parseFloat(numberOne / numberTwo).toFixed(2);

// Output
const msg = (
`
${numberOne} + ${numberTwo} = ${sumA}
${numberOne} - ${numberTwo} = ${sumS}
${numberOne} * ${numberTwo} = ${sumM}
${numberOne} / ${numberTwo} = ${sumD} (rounded)
`
);

console.log(msg);
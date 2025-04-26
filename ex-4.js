// Start coding here
let calculator = {
    add: function(a, b) {
        return a + b;
      },
      subtract: function(a, b) {
        return a - b;
      },
      multiply: function(a, b) {
        return a * b;
      },
      divide: function(a, b) {
        return a / b;
      }
};
let addResult = calculator.add(10,20);
console.log(addResult);
let divideResult = calculator.divide(3000,10);
console.log(divideResult);
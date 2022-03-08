function isPlainObject(obj) {
  // Start coding here
}

let result1 = isPlainObject({ name: "John" });
console.log(result1); //true

let result2 = isPlainObject(null);
console.log(result2); // false

let result3 = isPlainObject(["apples", "oranges"]);
console.log(result3); // false

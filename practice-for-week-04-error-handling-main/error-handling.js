// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let res;
try {
  res = sum(null);
} catch (e){
  console.log("Handling" + e.name +  e.message);
}

console.log(res);

// 2.
// tests
function sayName(name){
  if (typeof name !== "string"){
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log(name);
}

try{
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error(error.name + error.message);
}

// // Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet(null);
} catch (ex) {
  console.log("Hello World");
}

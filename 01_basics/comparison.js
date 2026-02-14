console.log(null == 0);
console.log(null > 0);
console.log(null <= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <= 0);

console.log(null == undefined);
console.log(null === undefined);

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);                  // NaN is a number but it is not equal to itself
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));               // isNaN converts the value to a number and then checks if it is NaN or not, so it returns true for "NaN" because it cannot be converted to a number and becomes NaN. and its string
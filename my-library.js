// 1. isEven(num)
function isEven(num) {
  if (typeof num === 'number' && !isNaN(num)) {
    return !(num % 2);
  }
}

// 2. isOdd(num)
function isOdd(num) {
  var answer = isEven(num);
  if (typeof answer === 'boolean')
    return !answer;
}

// 3. isDivisibleBy(num)
// isDivisibleBy(5)(10); => true
// или
// var canBeDividedByFive = isDivisibleBy(5);
// canBeDividedByFive(15); => true
function isDivisibleBy(num1) {
  if (typeof num1 != 'number' || isNaN(num1)) throw new Error(num1 + ' should be a number');
  return function(num2) {
    if (typeof num2 != 'number' || isNaN(num2)) throw new Error(num2 + ' should be a number');
    return !(num2 % num1);
  }
}

// 4. isNumber(val)
function isNumber(val) {
  return typeof val === 'number' && !isNaN(val);
}

// 5. переписать isEven с использованием isNumber
function isEven(num) {
  if (isNumber(num)) return !(num % 2);
}

// 6. переписать isDivisibleBy с использованием isNumber
function isDivisibleBy(by) {
  if (isNumber(by)) return function(num) {
    return isNumber(num) && !(num % by);
  }
  return function() {}
}

// 7. isNan(val)
function isNan(val) {
  return val !== val;
}
// параноидальная проверка
function isNan(val) {
  return typeof val === 'number' && val.toString() === 'NaN';
}

// 8. exist(val)
// exist(1) // true
// exist(0) // true
// exist('') // true
// exist('abc') // true
// exist([]) // true
// exist({}) // true
// exist(NaN) // true
// exist(null) // false
// exist(undefined) // false
// exist(void 0) // false
function exist(val) {
  return val != null;
}

// 9. isNull(val)
function isNull(val) {
  return val === null;
}

// 10. typeOf(val)
function typeOf(val) {
  if (isNan(val)) return 'NaN';
  return (({}).toString.call(val)).slice(8, -1).toLowerCase();
}
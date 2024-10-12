'use strict';

// task 1
console.log('===Task 1===');

const getStringAmount = (...array) => {
let counter = 0;

array.forEach(item => {
  if(typeof item === 'string') {
    counter++;
  };
});

return counter;
};

console.log(getStringAmount('test', 10, null, '1', false, false));

// task 2
console.log('===Task 2===');

const arr = ['text', NaN, 134, true, 'blablabla', -24.4, false, undefined, 'hello', 'hahaha'];

console.log(getStringAmount(...arr));

// task 3
console.log('===Task 3===');

function getNumbersDegree(number, degree) {
  if (degree === 0) {
    return 1;
  }
  
  return number * getNumbersDegree(number, degree - 1);
}

console.log(getNumbersDegree(2, 5));
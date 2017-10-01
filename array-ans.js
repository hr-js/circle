const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// #2
let index = 0;
while (array[index]) {
  console.log(array[index]);
  index++;
}

// #2
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}

// #3
array.forEach( val => console.log(val) );

// #4
array.map( val => console.log(val) );

// #5
for (let i in array) {
  console.log(array[i]);
}

// #6
for (let val of array) {
  console.log(val);
}

// #7
let ite = {};
ite[Symbol.iterator] = function* () {
  let val = 1;
  while (val <= 10) {
    yield val++;
  }
};

for (var val of ite) {
  console.log(val);
}

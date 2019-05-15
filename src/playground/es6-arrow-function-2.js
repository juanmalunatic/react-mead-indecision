//const add = function (a, b) {
//console.log(arguments); // args defined
//return a + b;
//}
const add = (a, b) => {
  //console.log(arguments); // args not defined
  return a + b;
}
console.log(add(55, 1, 1001, 1020));

console.log('-------------')

const user = {
  name: 'Juan',
  cities: ['Cali', 'Göttingen', 'Campinas'],

  printPlacesLived() {
    return this.cities.map((city) =>
      this.name + ' has lived in ' + city
    );
  }
}

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply(numbers, multiplyBy) {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
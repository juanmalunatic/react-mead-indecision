var nameVar = 'Juan';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log(nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

const fullName = 'Juan Luna';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
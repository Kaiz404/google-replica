// it must be noted that parameters and arguments are not the same
// parameters are the inputs a function has to receive
// arguments are given inputs

function greet (name, lastName) { // multiple parameters can be created by adding a ','
    console.log('Sup ' + name + ' ' + lastName);
}

function square (number) {
    return number ** 50;
}

greet('MEGA', 'SCHLONG'); // multiple arguments can be given by adding ','
console.log(square(2));
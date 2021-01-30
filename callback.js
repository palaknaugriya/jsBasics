/* Callback functions are Higher Order Function. In JS FUNCTIONS ARE ACTUALLY
FIRST CLASS OBJECTS. Just like you can pass objects to a function, you can pass function to another 
function. So you can execute it at some point of time.*/

// let x = function() {
//     console.log('I am called from inside a  function.')
// }

// let y = function(callback) {
//     console.log('Inside y')
//     callback()
// }

// y(x)
// Output -> Inside y
//           I am called from inside a  function.


/* Why use callback function?
Lets say I want to add, multiply or subtract as per the user input. So without callback 
you'll use if/else condition to do the same. But with callbacks you can call function 
inside a function and perform the operation */

// Without callback
// function withoutCallBack(num1, num2, operation) {
//     if (operation === 'add')
//         return num1 + num2
//     else if (operation === 'sun')
//         return num1 - num2
//     else if (operation === 'mul')
//         return num1 * num2
// }

// console.log(withoutCallBack(1, 2, 'add'))

//With Callback
// let add = function(num1, num2) {
//     return num1 + num2
// }

// let sub = function(num1, num2) {
//     return num1 - num2
// }
// let mul = function(num1, num2) {
//     return num1 * num2
// }

// function withCallBack(num1, num2, callback) {
//     // in case of garbage
//     if (typeof(callback) === 'function')
//         return callback(num1, num2)
// }

// console.log(withCallBack(2, 3, add))

// you can also write the function in the arguments as well instead of of defining them somewhere else


// console.log(withCallBack(2, 3, function(a, b) {
//         return a - b
//     })) // Since this function has no name, its called ANONYMOUS FUNCTION

// Callback function for sorting an array
let a = [
    { name: 'Palak', 'age': 24 },
    { name: 'Palak1', 'age': 241 },
    { name: 'Palak2', 'age': 242 },
    { name: 'Palak3', 'age': 243 }
]

a.sort(function(val1, val2) {
    if (val1.age < val2.age)
        return 1
    else
        return -1
})

console.log(a)
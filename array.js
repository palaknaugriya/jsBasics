/*ARRAY FUNCTIONS
-> Map
-> Filter
-> Includes (return boolean)
-> Find (returns value/object)
-> Some
-> Every
-> forEach*/

let a = [
    { name: 'Palak', 'age': 24 },
    { name: 'Palak1', 'age': 241 },
    { name: 'Palak2', 'age': 242 },
    { name: 'Palak3', 'age': 243 }
]

/* MAP, creates a new array of the mapped items. Lets say I want to extract
name from 'a' arary. Creates anaother array so the original array is unaffected*/
// let res = a.map((item) => {
//     return item.name
// })

// console.log(res)
// output -> [ 'Palak', 'Palak1', 'Palak2', 'Palak3' ]

/*FILTER, used to filter items in an array. Creates anaother array so the original array is unaffected*/
// let res = a.filter((item) => {
//     return item.age > 200
// })

// console.log(res)

// output -> [
//   { name: 'Palak1', age: 241 },
//   { name: 'Palak2', age: 242 },
//   { name: 'Palak3', age: 243 }
// ]

/* FIND. Use to find one particular value in the array. It returns as soon as it first encounters it. */
// let res = a.find((item) => {
//     return (item.age > 20)
// })

// console.log(res)

// Output - > { name: 'Palak', age: 24 }

/* SOME. Returns a boolean value. If any of the value meets the condition defined it will return
true as soon as it first encounters it. */
// let res = a.some((item) => {
//     return (item.age > 20)
// })

// console.log(res)

// Output - > true

/* EVERY. Returns a boolean value. If ALL of the value meets the condition defined it will return
true else it will return false. */
// let res = a.every((item) => {
//     return (item.age > 211)
// })

// console.log(res)

// Output - > false

/* REDUCE. You want to iterrate and  print the total after each iteation. Instead of using the for loop
you can use REDUCE method*/
// let res = a.reduce((subTotal, item) => {
//         subTotal += item.age
//         return (subTotal)
//     }, 0) // initial index

// console.log(res)

//Output -> 750

/* INCLUDES. Return Boolean value. Instead of passing a function we just need to pass  a single value. 
It will check if the item passed is present in the array, it'll return True else False.*/
let arr = [1, 2, 3, 4]
let res = arr.includes(2)

console.log(res)

//Output -> true

/* FOREACH. traverses every element of an array. It does not return anything so we'll use console.log */
// let res = a.forEach((item) => {
//     console.log(item.name)
// })

// Output - > Palak
// Palak1
// Palak2
// Palak3

/* Difference b/w forEach and for loop 
FOR EACH -> It calls array.prototype method in relation to array directly and so you don't need to apply an 
            condition and iterate it and access it via index
FOR LOOP -> You will have to iterate it, apply a condition for the traversal

FOR EACH -> You will have to traverse every element and you cannot early break
FOR LOOP -> You can early break by applying a condition and when that condition is false you can 
            exit the loop

FOR EACH -> Lesser chances of error. Because there is no need to apply the conditon so you'll
            traverse the entire array for sure.
FOR LOOP -> More chances of error. Because you might apply the wrong conditon. e.g. < instead of >=

FOR EACH -> Variable scope is within the block.
FOR LOOP -> Global variable scope

FOR EACH -> Easier to read.
FOR LOOP -> Less easy to read comparitively.
*/
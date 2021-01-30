// Promise
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a === 2)
//         resolve('True')
//     else
//         reject('False')
// })

const { resolve } = require("path")

// p.then((message) => {
//     console.log('In then block', message)
// }).catch((message) => {
//     console.log('In catch block', message)
// })



// Promises in a function 
// var a = 2

// function promiseFunc() {
//     return new Promise((resolve, reject) => {
//         if (a == 2)
//             resolve('a is ' + a)
//         else
//             reject('a is not equal to 2')
//     })
// }

// PROTOTYPE INSTANCE
/* nested callback leads to callback hell since callback within a callback ans so on
leads to that*/
// promiseFunc().then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

// Promise.all
let promise1 = new Promise((resolve, reject) => {
    resolve('promise1 recorded')
})

let promise2 = new Promise((resolve, reject) => {
    reject('promise2 recorded')
})

let promise3 = new Promise((resolve, reject) => {
    resolve('promise3 recorded')
})


// STATIC METHODS

// Promise.all([promise1, promise2, promise3]).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

/*output -> promise2 recorded*/

// Promise.allSettled([promise1, promise2, promise3]).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

/*output -> 
[
    { status: 'fulfilled', value: 'promise1 recorded' },
    { status: 'rejected', reason: 'promise2 recorded' },
    { status: 'fulfilled', value: 'promise3 recorded' }
  ] */

// Promise.race([promise1, promise2, promise3]).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

/* promise1 recorded */

Promise.reject([promise1, promise2, promise3]).then((reason) => {
    console.log(reason)
}).catch((error) => {
    console.log(error)
})

/* promise1 recorded */

// Promise.race([promise1, promise2, promise3]).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

/* promise1 recorded */
/* async/await is a syntactical sugar around promises*/

const { rejects } = require("assert");
const { resolve } = require("path");

function func1(num) {
    return new Promise((resolve, reject) => {
        if (num > 0)
            resolve('Number is greater than 0')
        else
            reject('Number is less than or equal to 0')
    })
}

function func2(num) {
    return new Promise((resolve, reject) => {
        if (num > 10)
            resolve('Number is greater than 0')
        else
            reject('Number is less than or equal to 0')
    })
}

// Promises without async/await
// func1(1).then((message) => {
//     console.log('Success for func1')
//     return func2(1)
// }).then((message) => {
//     console.log('Success for func2')
// }).catch((e) => {
//     console.log(e)
// })

// Promises with async/await. Use try catch for exception handling in async/await

async function awaitFunction() {
    try {
        const res1 = await func1(1)
        console.log(`Res1: ${res1}`)
        const res2 = await func2(10)
        console.log(`Res1: ${res2}`)
    } catch (e) {
        console.log(e)
    }
}

awaitFunction()

/* NOTE: You should use await with async else the above will not be asynchronous call and 
will print the promise object since of the value*/
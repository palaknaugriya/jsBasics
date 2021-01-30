const { rejects } = require("assert");
const { resolve } = require("path");

function add(n1, n2) {
    return new Promise((resolve, reject) => {
        resolve(n1 + n2)
    })
}

function sub(n1, n2) {
    return new Promise((resolve, reject) => {
        resolve(n1 - n2)
    })
}

function mul(n1, n2) {
    return new Promise((resolve, reject) => {
        resolve(n1 * n2)
    })
}

// add(2, 3).then((res) => {
//     console.log(`Addition then block ${res}`)
//     return sub(res, 4)
// }).then((res) => {
//     console.log(`Suntraction then block ${res}`)
//     return mul(res, 4)
// }).then((res) => {
//     console.log(`Multiplication then block ${res}`)
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


async function performOperation() {
    try {
        let addition = await add(2, 3)
        console.log(`Addition then block ${addition}`)
        let subtraction = await sub(addition, 4)
        console.log(`sub then block ${subtraction}`)
        let multiplication = await mul(subtraction, 4)
        console.log(`mul then block ${multiplication}`)
    } catch (e) {
        console.log(e)
    }
}

performOperation()
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(outerValue)
        console.log(innerValue)
    }
}

let res = outerFunction('outer')
res('inside')
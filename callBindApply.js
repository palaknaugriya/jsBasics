let name1 = {
    firstname: "Palak",
    lastname: "Gupta"
}

let name2 = {
    firstname: "Naina",
    lastname: "Gupta"
}

function concatinate(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state)
}

// CALL -> Call a function with given 'this' value. Arguments to be passed comma seperated.
console.log('CALL')
concatinate.call(name1, 'Jhansi', 'Up')
concatinate.call(name2, 'Delhi', 'Delhi')

// APPLY -> Call a function with given 'this' value. Arguments to be passed in an array.
console.log('APPLY')
concatinate.apply(name1, ['Jhansi', 'Up'])
concatinate.apply(name2, ['Delhi', 'Delhi'])

// BIND -> Creates a new function and binds its 'this' to it 
let bindFunction1 = concatinate.bind(name1, 'Jhansi', 'Up')
let bindFunction2 = concatinate.bind(name1, 'Delhi', 'Delhi')
console.log(bindFunction1) // returns a function
console.log('BIND')
bindFunction1()
bindFunction2()
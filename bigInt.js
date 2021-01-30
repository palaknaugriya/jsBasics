function fibonaci(n) {
    try {
        let first = 0
        let second = 1
        for (let i = 2; i < n; i++) {
            nextTerm = BigInt(first) + BigInt(second)
            first = second
            second = nextTerm
        }
        return second
    } catch (e) {
        console.log(e)
    }
}

async function functionCall() {
    var startTime = new Date().getTime()
    let res = await fibonaci(100000)
    console.log(res)
    var endTime = new Date().getTime()
    console.log(endTime - startTime)
}

functionCall()
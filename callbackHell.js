// Callback to promises
getDetails('Bob', function(err, details) {
    getLongLat(details.address, details.country, function(err, longLat) {
        getNearbyBars(longLat, function(err, bars) {
            console.log('Your nearest bar is: ' + bars[0]);
        });
    });
});

getDetails('Bob').then(function(details) {
    return getLongLat(details.address, details.country);
}).then(function(longLat) {
    return getNearbyBars(longLat);
}).then(function(bars) {
    console.log('Your nearest bar is: ' + bars[0]);
});

// callback to promise
const verifyUser = function(username, password, callback) {​​​​
    dataBase.verifyUser(username, password, (error, userInfo) => {​​​​
        if (error) {​​​​
            callback(error)
        }​​​​
        else {​​​​
            dataBase.getRoles(username, (error, roles) => {​​​​
                if (error) {​​​​
                    callback(error)
                }​​​​
                else {​​​​
                    dataBase.logAccess(username, (error) => {​​​​
                        if (error) {​​​​
                            callback(error);
                        }​​​​
                        else {​​​​
                            callback(null, userInfo, roles);
                        }​​​​
                    }​​​​)
                }​​​​
            }​​​​)
        }​​​​
    }​​​​)
}​​​​;

verifyUser(username, password).then((userInfo) => {
    return getRoles(username)
}).then((userInfo) => {
    return logAccess(username)
}).then(() => {
    return null
}).catch((err) => {
    console.log(err)
})


// Callback to promise
function add(num, callback) {
    return callback(5 + num, false)
}

function sub(num, callback) {
    return callback(num - 3, false)
}

function mul(num, callback) {
    return callback(5 * num, false)
}

add(5, (addRes, err) => {
    if (!err) {
        sub(addRes, (subRes, err) => {
            if (!err) {
                mul(subRes, (mulRes, err) => {
                    console.log('result', mulRes)
                })
            }
        })
    }
})

let promise = new Promise((resolve, reject) => {
    resolve(5)
})

function add(num) {
    return (5 + num)
}

function sub(num) {
    return (num - 3)
}

function mul(num) {
    return (5 * num)
}

promise.then(add).then(sub).then(mul).then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})
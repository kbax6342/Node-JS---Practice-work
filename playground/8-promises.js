const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 4, 1])
        reject("This is my error")
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Succes', result)
}).catch((error) => {
    console.log("Error", error)
})
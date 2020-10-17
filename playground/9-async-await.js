const doWork = async () => {
   return 'Kevin'
}

console.log(doWork())

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})
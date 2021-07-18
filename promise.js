//Sync - event handler - button - alert,<p> - JS thread
//Asyn - fetch(file),display(file) - callback , promise

//promise - real time promises
//Scenario - writing exam - pass - party, fail - temple

//interms of js
//writing exam- promise
//waiting for result - async operation in js 
//value -pass/fail- promise return value
//pass - promiseis fullfilled
//fail- promise is rejected
//hosting party- success callback
//temple-failure callback


//it takes function as a parameter,function takes two function as a parameter
// let a= 2+3
// let p = new Promise(function(resolve,react){
// if(a==5)
// {
//     resolve('Success')
// }
// else{
//     react('Failure')
// }
// })
// console.log(p)

let a= 2+3
let p = new Promise(function(resolve,react){
    if(a==8)    
    {
        resolve('Success')
    }
    else{
        react('Failure')
    }
    })
console.log(p)
//promise chaining
p.then((message)=>{//success callback
    console.log(message + ' then is executed')
}).then((msg)=>{
    console.log(' multiple then ')
})
.catch((result)=>{//catch-failure callback
    console.log(result + ' catch is executed')
})


const r1= new Promise((resolve,react)=>{
    resolve('Video 1 is recorded')
})
const r2= new Promise((resolve,react)=>{
    resolve('Video 2 is recorded')
})

const r3= new Promise((resolve,react)=>{
    resolve('Video 3 is recorded')
})
Promise.all([p,r1,r2,r3]).then((msg)=>{//if one promise is failed the it will move to the failire state
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})
//allSetteled will specify the status
Promise.allSettled([p,r1,r2,r3]).then((msg)=>{//if one promise is failed the it will move to the failire state
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})
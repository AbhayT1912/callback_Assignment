function racePromises(arr){
    return Promise.race(arr);
}

const promise1 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Promise 1 resolved"),2000)
})

const promise2 = new Promise((_,reject)=>{
    setTimeout(()=> reject("Promise 2 rejected"),1000)
})

racePromises([promise1,promise2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})
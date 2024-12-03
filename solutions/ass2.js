function getdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Fetched Successfully")
        },2000)
    })
}

getdata().then((result)=>{
    console.log(result)
})
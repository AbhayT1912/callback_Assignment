function fetchMultipleData (urls){
    const promise = urls.map((url)=>{
        fetch(url).then((res)=>res.json())
    })
    return Promise.all(promise)
}

const urls = ["https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/2"
]

fetchMultipleData(urls).then((res)=>{
    console.log(res)
})
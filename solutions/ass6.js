function fetchUserDataAndPosts (id){
    return fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((data)=>data.json())
    .then((user)=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`

        )
        .then((res)=> res.json())
        .then((psot)=>({user : user, psot}))
    })
}

fetchUserDataAndPosts(1).then((res)=>{
    console.log(res);
})
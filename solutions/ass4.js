async function fetchdata(URL){
    const api = await fetch(URL);
    const data = await api.json();
    return data;
}


fetchdata("https://jsonplaceholder.typicode.com/todos/1").then((data)=>{
    console.log(data);
})
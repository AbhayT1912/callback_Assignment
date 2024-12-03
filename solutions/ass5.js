function multiplybycallback(arr,callback){
    const multiplyarray = arr.map((num)=> num * 2);
    callback(multiplyarray);
}

let array =[3,2,1];
multiplybycallback(array,(callback)=>{
    console.log(callback);
})
function sumAsync(a, b, callback) {

    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 1000); 
  }

  sumAsync(5, 3, (result) => {
    console.log(result);
  });
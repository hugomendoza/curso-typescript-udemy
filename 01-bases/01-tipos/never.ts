(() => {

  const error = (message:string):(never | number) => {
    // throw new Error(message)

    if(false) {
      throw new Error(message)
    }

    return 1;
  }

  error("Auxilio");
  console.log("Hola mundo");

})()
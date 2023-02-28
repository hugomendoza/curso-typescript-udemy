(() => {
  const fullName = ( firstname:string, lastname?:string, upper: boolean = false ):string => {
    if(upper) {
      return `${ firstname } ${lastname || "--"}`.toUpperCase();
    } else {
      return `${ firstname } ${lastname || "--"}`;
    }
  }

  const name = fullName("Tony", "Stark");

  console.log(name);

})()
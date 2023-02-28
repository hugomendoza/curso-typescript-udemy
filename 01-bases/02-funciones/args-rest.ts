(() => {

  const fullName = ( firstname: string, ...restArgs:string[]):string => {
    return `${ firstname } ${ restArgs.join(" ") }`
  }

  const superman = fullName( "Clark", "Joseph", "Kent" );
  const batman = fullName( "Bruce", "wayne" );

  console.log({ superman, batman });

})()
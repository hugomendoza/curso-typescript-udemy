(() => {

  const batman:string = "Batman";
  const linternaVerde:string = "Linterna verde";
  const volcanNegro:string = `Héroe: volcan negro`;

  const abc = 123;

  console.log(`I'm ${batman}, ${abc}`);
  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || "No esta presente");

})()
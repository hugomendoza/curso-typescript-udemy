(() => {

  // * enum maneja solo números
  enum AudioLevel {
    min = 1, // 0
    medium, // 1
    max = 10, // 2
  }

  let currentAudio = AudioLevel.max ;

  console.log( currentAudio );
  console.log( AudioLevel );

})()
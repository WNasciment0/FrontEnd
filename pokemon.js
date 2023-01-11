const fetch = require ('node-fetch');
fetch('https://pokeapi.co/api/v2/pokemon/umbreon')

  .then((result) => {
    console.log(result);
  })
  .catch((erro) => {
    console.log(erro);
  });
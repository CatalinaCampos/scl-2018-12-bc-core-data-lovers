//aquí van las funciones
// let data = window.POKEMON.pokemon; // con window. no se visualiza la información
// let modifiedData = window.POKEMON.pokemon; // esta variable se utilizara de forma global para cuando tengamos pokemones filtrados u ordenados se guarden aqui y se pueda utilizar en todos los sitios (seran los pokemones que se ven en el momento en la pagina). En un comienzo se ven todos por eso le seteamos que sea igual a data.
window.pokemons = {

filterData: (data, condition) => {
    let filtered = [];
    for (let i = 0; i < window.POKEMON.pokemon.length; i++){
        for (let e = 0; e < window.POKEMON.pokemon[i].type.length; e++) {
            if(window.POKEMON.pokemon[i].type[e] === condition){
                filtered.push(window.POKEMON.pokemon[i]);
            }
        }
    }
    return filtered;
},

//sirve para ordenar. dataPokemon = los pokemones que quieres ordenar, sortBy puede ser 'name' actualmente, sortOrder puede ser true o false donde true es ascendente y false es descendente
sortData: (dataPokemon, sortBy, sortOrder) => {
  /* lo siguiente ordena según el nombre, dividiendose en ascendente(true) y descendente(false) */
  if (sortBy === 'name') {
	// ordena de forma ascendente
    if (sortOrder === true){
		//aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden.  El sort hace el trabajo de filtrar ascendente o descendente
      return dataPokemon.slice().sort(function(a, b){
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        if (x < y) {
          return -1;
        } if (x > y) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortOrder == false){ // ordena de forma descendente
		//aplicamos slice para que no modifique el array original y asi tenerlos sin orden por si quiere sacar el orden. El sort hace el trabajo de filtrar ascendente o descendente
      return dataPokemon.slice().sort(function(a, b){
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        if (x < y) {
          return 1;
        } if (x > y) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }
}
}
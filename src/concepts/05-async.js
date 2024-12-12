import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {


   const id1 = '5d86371fd55e2e2a30fe1ccb';
   console.log('Inicio del componente'); // (1)

findHero(id1)
      // .then( name => element.innerHTML = name )
      .then( name => element.innerHTML = name )
      .catch (error => element.innerHTML = error) // (3)

console.log('Fin del componente');  //(2)
  
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */

const findHero = async( id ) =>{ // funcion cib argumento id, que retorna una promesa que resuelve un string

   
   const hero = heroes.find( hero => hero.id === id) 


   if (!hero)
      throw `Hero with id: ${id} not found`;

   return hero.name; // los returns en las promesas son los casos de exito
}
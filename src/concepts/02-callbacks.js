import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1ccb524';
    findHero(id, (error, valorHero) => {

        if (error){
            element.innerHTML= error ;
            return;
        }

        element.innerHTML = valorHero.name; // condicional '?' que verifica si el id del heroe existe
        

    });

    // console.log('callbacksComponent'); // 
  
}



/**
 * 
 * @param {String} id 
 * el primer argumento el callback será el error, por lo que se debe mandar en la función un null
 * @param {(error: String |Null, hero: Object) => void} callback // heroe como argumento de tipo object y es una función que no regresa nada
 */
const findHero = (id, callback) => {

   const hero = heroes.find (hero => hero.id === id); // buscar un heroe por el id

    if (!hero){
        callback (`Hero with id ${id} not found`);
        return; // para que se salga de la función y no ejecute nada mas
    }


    // el primer argumento es el error, por lo que se manda el null primero
   callback(null,hero); // se llama el callback cuando se tenga el heroe


}
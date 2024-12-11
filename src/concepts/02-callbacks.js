import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1cc343';
    findHero(id1, (error, valorHero1) => {

        if (error){
            element.innerHTML= error ;
            return;
        }
    
        findHero(id2, (error, valorHero2) => {
            
            if (error){
                element.innerHTML= error ;
                return;
            }

        
        // element.innerHTML = valorHero.name; // condicional '?' que verifica si el id del heroe existe
            element.innerHTML = `${valorHero1.name} / ${valorHero2.name}`;
        })

    });
  
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
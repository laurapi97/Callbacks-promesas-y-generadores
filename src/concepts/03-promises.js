import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {


    const renderHero = (hero) =>{
        element.innerHTML = hero.name;
    }


    const renderError = (error) =>{
        element.innerHTML = 
        `<h1> Error: </h1>
        <h3> ${error} </h3>`;
    }

    const id1 = '5d86371f97c29d020f1e1f6d42';

    findHero (id1)
        .then(renderHero)
        .catch(renderError);
  
}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) =>{
    // dentro de la promesa hay un callback
    return new Promise ((resolve, reject)=>{ // función que regresa un new promise

        const hero = heroes.find (hero => hero.id === id);

         if ( hero) {
            resolve (hero);
            return; // para finalizar la función
         }

         reject(`Hero with id ${id} not found`);

    });

    
}
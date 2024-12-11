import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {


    const renderHero = (hero) =>{
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) =>{
        element.innerHTML = `
        <h3> ${hero1.name} </h3>
        <h3> ${hero2.name} </h3>
        `;
    }


    const renderError = (error) =>{
        element.innerHTML = 
        `<h1> Error: </h1>
        <h3> ${error} </h3>`;
    }

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    let hero1, hero2;

    findHero (id1)
        .then((hero1) => {
          
            findHero (id2)
            .then ((hero2)=>{
                renderTwoHeroes(hero1,hero2)
            })
        })
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
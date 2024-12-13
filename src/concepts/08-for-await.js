import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f2343e37870b91ef1';

    const heroIds = heroes.map (hero => hero.id) ;

    const heroPromises = getHeroesAsync(heroIds); // arreglo de promesas no de héroes

    for await(const hero of heroPromises){ // iterador asíncrono que resuelve las promesas simultaneamente
        element.innerHTML += `${hero.name} </br>`
    }

    // if (await getHeroAsync (id)) {
    //     element.innerHTML = 'Si existe ese héroe';
    //     return;
    // }


    // element.innerHTML = 'No existe ese héroe';
    

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>} // recibe un arreglo de IDS y retorna un arreglo de promesas sin resolverlas
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}



/**
 * 
 * @param {id} id 
 * @returns {Promise} busca el héroe por su id y retorna una promesa
 */
const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}




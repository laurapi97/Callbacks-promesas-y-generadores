import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {


    const heroGenerator = getHeroGenerator();

    let isFinished = false;


    do {

        const {value, done} = await heroGenerator.next();
        isFinished = done;

        if(isFinished) break;

        element.innerHTML = value;
    
    } while (!isFinished)
    
  
}





async function* getHeroGenerator () {
    for ( const hero of heroes) {
        await sleep (); // eso hace que se demore 1 segundo entre cada una de las emisiones llamadas
        yield hero.name;
   
    }

    return 'no hay mas';
}





// Funciones generadoras asíncronas
const sleep = () => {

    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve();
        },1000);
    })

}
import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {


   

 const id1 ='5d86371f1efebc31def272e2';
 const id2 ='5d86371f233c9f2425f16916';


try{

   const hero1 = await findHero (id1);
   const hero2 = await findHero (id2);
  
   element.innerHTML = `${hero1.name}/ ${hero2.name}`;
} catch (error){

   element.innerHTML='Error, hero not found';
}



}




const findHero = async (id) =>{


    const hero =  heroes.find(hero => hero.id === id)

    if (!hero)
      throw 'Hero not found';

    return hero;
}
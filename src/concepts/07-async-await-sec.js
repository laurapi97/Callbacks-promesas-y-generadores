
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element) => {


    console.time('start');


    const value1 = await slowPromise();
    const value2 = await mediumPromise();
    const value3 = await fastPromise ();


    element.innerHTML = ` 
    value 1: ${value1} <br/>
    value 2: ${value2} <br/>
    value 3: ${value3} <br/>
    `;

    console.timeEnd('start');
  
}



// Promesas
const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});

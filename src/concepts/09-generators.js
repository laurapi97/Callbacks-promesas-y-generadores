
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction ();

    // console.log(myGenerator.next());
   
  const genID = idGenerator();
  

  // Botón
  const button = document.createElement('button');
  button.innerText ='Click me';
  element.append(button);


// función para renderizar el botón
  const renderButton = () => {
    const {value} = genID.next(); // cada vez que utilizo la función da el siguiente valor y se extrae {}
    button.innerText = `Click ${value}`;
  }

  

button.addEventListener('click', renderButton);



}


// generar números ...
function* idGenerator (){
    let currentId = 0;

    while (true){ // ciclo infinito donde siempre se cumple la condición
        yield ++currentId; // ++currentID = 1, currentId++ = 0

    }
    

}




function * myFirstGeneratorFunction(){

    yield 'Primer valor'; // done = false
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';


    return 'Ya no hay valores';// done = true
    // despues de acá retorna undefined

}
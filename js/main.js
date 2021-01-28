'use strict';
//CONSTANTES

const tryButtonElement= document.querySelector('.container__form--button');
const counterElement= document.querySelector('.container__attempt');
const randomNumber= getRandomNumber(100);
const introduceNumber= document.querySelector('.container__form--number');
const clueElement= document.querySelector('.container__clue');
const  attemptElement= document.querySelector('.container__attempt');


//GENERAR NÚMERO ALEATORIO

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    console.log(`El número aleatorio es ${randomNumber}`);

//LEER VALOR INPUT Y COMPARAR
function handleGame(){ 
    const userNumber = introduceNumber.value;
    console.log(`La usuaria ha introducido el número ${userNumber}`);

    if (randomNumber === userNumber) {
        clueElement.innerHTML = 'Has ganado campeona!!';
      } else if (
        userNumber < 1 || userNumber > 100
      ) {
        clueElement.innerHTML = 'Por favor, introduce un número entre 1 y 100.';
      } else if (randomNumber < userNumber) {
        clueElement.innerHTML = 'El número es demasiado alto';
      } else {
        clueElement.innerHTML = 'El número es demasiado bajo';
      }
}


//ESCRIBIR NUMERO DE INTENTOS




//ESCUCHAR EVENTO
tryButtonElement.addEventListener('click',handleGame);
tryButtonElement.addEventListener('click',handleGame);
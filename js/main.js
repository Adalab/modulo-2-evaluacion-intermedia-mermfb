'use strict';
//CONSTANTES

const tryButtonElement= document.querySelector('.container__form--button');
const counterElement= document.querySelector('.container__attempt');
const randomNumber= getRandomNumber(100);

//ESCRIBIR NUMERO DE INTENTOS

//GENERAR NÚMERO ALEATORIO

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
    console.log(`El número aleatorio es ${randomNumber}`);

//LEER VALOR INPUT Y COMPARAR
//POSIBLES RESPUESTAS


//ESCUCHAR EVENTO
//tryButtonElement.addEventListener('click',);
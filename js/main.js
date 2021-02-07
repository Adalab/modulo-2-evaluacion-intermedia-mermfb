"use strict";
//CONSTANTES

const tryButtonElement = document.querySelector(".container__form--button");
const counterElement = document.querySelector(".container__attempt");
const randomNumber = getRandomNumber(100);
const introduceNumber = document.querySelector(".container__form--number");
const clueElement = document.querySelector(".container__clue");
const attemptElement = document.querySelector(".container__attempt");
const formElement = document.querySelector(".container__form");
const resetBtn = document.querySelector(".container__button--resetbtn");

//GENERAR NÚMERO ALEATORIO

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`El número aleatorio es ${randomNumber}`);

//PREVENIR ENVIO FORMULARIO

function handleForm(ev) {
  ev.preventDefault();
}

// SUSTITUIR INNERHTML

function giveAClue(message) {
  clueElement.innerHTML = "Pista: " + message;
}

//BOTÓN DE RESET

// function handleReset() {
//   randomNumber;
//   console.log(`El número aleatorio es ${getRandomNumber(100)}`);
//   introduceNumber.value = "";
//   giveAClue("Escribe el número y dale a PRUEBA");
//   ereaseCounter();
// }

//LEER VALOR INPUT Y COMPARAR

function handleGame() {
  const userNumber = introduceNumber.value;
  const numberValue = parseInt(userNumber);
  console.log(`La usuaria ha introducido el número ${numberValue}`);

  if (isNaN(numberValue)) {
    giveAClue("Por favor, introduce un número entre 1 y 100.");
  } else if (numberValue < 1 || numberValue > 100) {
    giveAClue("Por favor, introduce un número entre 1 y 100.");
  } else if (numberValue > randomNumber) {
    giveAClue("El número es demasiado alto");
  } else if (numberValue < randomNumber) {
    giveAClue("El número es demasiado bajo");
  } else {
    giveAClue("Has ganado campeona!!");
  }

  increaseCounter();
}

//ESCRIBIR NUMERO DE INTENTOS

let counter = 0;
function increaseCounter() {
  counter = counter + 1;
  attemptElement.innerHTML = `Número de intentos:${counter}`;
}

//BORRAR NÚMERO DE INTENTOS
function ereaseCounter() {
  counter = 0;
  attemptElement.innerHTML = `Número de intentos:${counter}`;
}

//ESCUCHAR EVENTO
tryButtonElement.addEventListener("click", handleGame);
formElement.addEventListener("submit", handleForm);
resetBtn.addEventListener("click", handleReset);

import {info} from './env.js';

// --- Global Variables
const body = document.querySelector('body');
const button = document.querySelector('.button')
const word = document.createElement('h1');
const definition = document.createElement('p');

// -- Test page --
// const h1 = document.createElement('h1');
// body.appendChild(h1);
// h1.textContent = 'Hello World';

// Send request to Random Word API, return 1 random word
const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com//word?number=1')
    .then(response =>{
        return response.json();
    })
    // Assign word response to text content of h1 element
    .then(response =>{
        word.textContent = response;
        // Append h1 content to body
        body.appendChild(word);
        randomDefinition(word);
    })
    .catch(err =>{
        console.log(err);
    })
}

// Send request to Marriam-Webster API
const randomDefinition = (word) => {
    console.log(word.textContent);
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/chicken?key=${info.key}`)
    .then(response =>{
        return response.json();
    })
    // Assign definition response to p 
    .then(response =>{
        // console.log(response);
        console.log(response[0].shortdef[0]);
        definition.textContent = "Definition: " + response[0].shortdef[0];
        body.appendChild(definition)
    })
    .catch(err => {
        console.log(err);
    })
}



// Add event to Random Word button
button.addEventListener('click', function(){
    randomWord();
})



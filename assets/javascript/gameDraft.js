var pokemon = [
  {
    "name": "Bulbasaur",
    "number": 1,
    "type": "grass/poison",
    "img": "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/240px-001Bulbasaur.png",
  },
  {
    "name": "Ivysaur",
    "number": 2,
    "type": "grass/poison",
    "img": "",
  },
  {
    "name": "Venusaur",
    "number": 3,
    "type": "grass/poison",
    "img": "",
  },
  {
    "name": "Charmander",
    "number": 4,
    "type": "Fire",
    "img": "",
  },
  {
    "name": "Charmeleon",
    "number": 5,
    "type": "Fire",
    "img": "",
  },
  {
    "name": "Charizard",
    "number": 6,
    "type": "Fire/Flying",
    "img": "",
  },
  {
    "name": "Squirtle",
    "number":  7,
    "type": "Water",
    "img": "",
  },
  {
    "name": "Wartortle",
    "number": 8,
    "type": "Water",
    "img": "",
  },
  {
    "name": "Caterpie",
    "number": 10,
    "type": "Bug",
    "img": "",
  },
  {
    "name": "Metapod",
    "number": 11,
    "type": "Bug",
    "img": "",
  },
  {
    "name": "Butterfree",
    "number": 12,
    "type": "Bug/Flying",
    "img": "",
  },
  {
    "name": "Weedle",
    "number": 13,
    "type": "Bug/Poison",
    "img": "",
  },
  {
    "name": "Kakuna",
    "number": 14,
    "type": "Bug/Poison",
    "img": "",
  },
  {
    "name": "Beedrill",
    "number": 15,
    "type": "Bug/Poison",
    "img": "",
  },
  {
    "name": "Pidgey",
    "number": 16,
    "type": "Normal/Flying",
    "img": "",
  },
  {
    "name": "Pidgeotto",
    "number": 17,
    "type": "Normal/Flying",
    "img": "",
  },
  {
    "name": "Pidgeotto",
    "number": 18,
    "type": "Normal/Flying",
    "img": "",
  },
  {
    "name": "Rattata",
    "number": 19,
    "type": "Normal",
    "img": "",
  },
  {
    "name": "Raticate",
    "number": 20,
    "type": "Normal",
    "img": "",
  },
  {
    "name": "Spearow",
    "number": 21,
    "type": "Normal/Flying",
    "img": "",
  },
  {
    "name": "Fearow",
    "number": 22,
    "type": "Normal/Flying",
    "img": "",
  }
]

var rng = Math.floor(Math.random() * 22);
var guesses = 6;
var lettersUsed = '';
var problemArr = [];
var solutionArr = [];


function generateProblem (length, input, index) {
  var problemString = '';
  if(!input){
    input = '_';
    for (var i = 0; i < length; i++){
      problemArr.push(input);
      solutionArr.push(pokemon[rng].name.charAt(i).toUpperCase());
    }
  }else{
    problemArr[index] = input;
    solutionArr[index] = '_';
    console.log(solutionArr);
    }

    for(var j = 0; j < length; j++){
      problemString = problemString + ' ' + problemArr[j];
    }

    document.getElementById("game").innerHTML =
    '<h2>Who\'s that Pokemon?</h2><br><br>' + problemString + '<br><br>';
  }


console.log(pokemon[rng]);
generateProblem(pokemon[rng].name.length);
console.log(solutionArr);

document.onkeyup = function () {
  var userInput = event.key.toUpperCase();
  console.log("user input: ", userInput);
  var pokename = pokemon[rng].name.toUpperCase();

  if(problemArr.includes(userInput)){
    return alert('You already guessed that letter!');
  }

  if (userInput.charCodeAt(0) <= 90 && userInput.charCodeAt(0) >= 65 && userInput.length === 1){
    if(!solutionArr.includes(userInput)){
      guesses--;
      lettersUsed = lettersUsed + ' ' + userInput;
    }else{
      while(solutionArr.includes(userInput)){
        generateProblem(problemArr.length, userInput.toUpperCase(), solutionArr.indexOf(userInput));
      }
      lettersUsed= lettersUsed + ' ' + userInput;
    }
    console.log("guesses remaining: ", guesses);
    console.log(lettersUsed);
    document.getElementById('stats').innerHTML = '<strong>Remaining guesses: </strong><span>' + guesses + '<br><br>' +
    'letters used: ' + lettersUsed;
  }
}

var pokedex = {
  "pokemon" : [
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
    }
  ],
  "rng": Math.floor(Math.random() * 20 + 1),
  "problemArr": [],
  "solutionArr": [],
  "lettersUsed": '',
  "win": false,
  "generateProblem": function (length, input, index) {
    if(!input){
      input = '_';
      for (var i = 0; i < length; i++){
        probArr.push(input);
        solArr.push(pokeObj.name.charAt(i).toUpperCase());
      }
    }else{
      probArr[index] = input;
      solArr[index] = '_';
      console.log(solArr);
      }

      for(var j = 0; j < length; j++){
        probStr = probStr + ' ' + probStr[j];
      }

      return probStr;
  },
  "guessedLetter": function(input, array){
    if(array.includes(input)){
      return alert('You already guessed that letter!');
    }
  },
  "evaluateInput": function(input, probArr, solArr, used){
    if (input.charCodeAt(0) <= 90 && input.charCodeAt(0) >= 65 && input.length === 1){
      if(!solArr.includes(input)){
        guesses--;
        used = used + ' ' + input;
      }else{
        while(solArr.includes(input)){
          pokedex.generateProblem(probArr.length, input.toUpperCase(), solArr.indexOf(input));
        }
        used = used + ' ' + input;
      }
      console.log("guesses remaining: ", guesses);
      console.log(used);
      document.getElementById('remaining').innerHTML = guesses;
      document.getElementById('letters').innerHTML = used;
    }
  }
}


var guesses = 6;
var probStr = '';
var probArr = pokedex.problemArr;
var solArr = pokedex.solutionArr;
var pokeObj = pokedex.pokemon[pokedex.rng - 1];

console.log(pokeObj);
var probStr = pokedex.generateProblem(pokeObj.name.length);
console.log(solArr);

document.onkeyup = function () {
  var userInput = event.key.toUpperCase();
  console.log("user input: ", userInput);

  //checks whether or not the user has already guessed the letter
  pokedex.guessedLetter(userInput, probArr);

  probStr = pokedex.evaluateInput(userInput, pokedex.problemArr, pokedex.solutionArr, pokedex.lettersUsed);

  document.getElementById("game").innerHTML =
  '<br><br>' + probStr + '<br><br>';

  if(guesses === 0){
    alert('Voltorb used Self Destruct');
    alert('You fainted!');
    location.reload();
  }

/*
  for(var k = 0; k < problemArr.length; k++){
    if(problemArr[k] !== "_"){
      win = true;
    }else{
      win = false;
    }
  }

  if(win){
    alert('Voltorb looks happy!');
    alert('Voltorb ran away!');
    location.reload();
  }*/
}

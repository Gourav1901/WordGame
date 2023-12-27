const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH =5;
async function init() {
    let currentGuess = '';
    let currrentRow = 0;

    const res = await fetch("https://words.dev-apis.com/word-of-the-day")
    const resObj = await res.json();
    const word = resObj.word.toUpperCase();
    const wordParts = word.split("");
    setLoading(false);

    console.log(word);


   function addLetter (letter){
      if(currentGuess.length < ANSWER_LENGTH  ) {
        currentGuess += letter;
      } else {
        currentGuess = currentGuess.substring(0, currentGuess.length-1)+letter;

      }
      letters[ANSWER_LENGTH * currrentRow + currentGuess.length-1].innerText=letter;
   }

     async function commit(){
      if(currentGuess.length !== ANSWER_LENGTH) {
        //DO NOTHING
        return;
      }

     const guessParts = currentGuess.split("");
     
    const map = makeMap(wordParts);
    console.log(map);

    for(let i = 0; i<ANSWER_LENGTH; i++){
      //MARK AS CORRECT
      if(guessParts[i] === wordParts[i]){
        letters[currrentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      }
    }
     
    for(let i = 0; i < ANSWER_LENGTH; i++ ) {
      if(guessParts[i] === wordParts[i]){
        // do nothing , we already did it
      } else if(wordParts.includes(guessParts[i]/* too make this more accurate */)){
        letters[currrentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else{
        letters[currrentRow * ANSWER_LENGTH + i].classList.add("wrong");
      }

    }



      currrentRow++;
      currentGuess = '';

     }
     
    function backspace() {
      currentGuess = currentGuess.substring(0, currentGuess.length-1)
      letters[ANSWER_LENGTH * currrentRow + currentGuess.length].innerText="";
    }



  document.addEventListener('keydown', function handleKeyPress (event) {

      const action = event.key;

     

      if(action === 'Enter') {
        commit();
      }
      else if(action === 'Backspace') {
        backspace();
      }
      else if(isLetter(action)) {
        addLetter(action.toUpperCase())
      }  else { 

      }

  });
}

  function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
  }

  function setLoading(isLoading){
    loadingDiv.classList.toggle('show', !isLoading )
  }

   function makeMap (array){
    const obj = {};
    for (let i=0;i<array.length;i++)
    {
    const letter = array[i]
    if(obj[letter]){
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  } 
  return obj;
   }

    init();


    
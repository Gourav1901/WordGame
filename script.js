const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH =5;
async function init() {
    let currentGuess = '';
    let currrentRow = 0;
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
      currrentRow++;
      currentGuess = '';

     }


  document.addEventListener('keydown', function handleKeyPress (event) {

      const action = event.key;

      console.log(action);

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

    init();


    
/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];
  const player1 = document.getElementById('player-1');
  const player1Name = document.getElementById('player1-name');
  const player1Container = document.getElementById('player1-container');

  /* 1a. */
  const player2 = document.getElementById('player-2');
  const player2Container = document.getElementById('player2-container');
  const player2Name = document.getElementById('player2-name');

  /* 1b. */
  const resultArea = document.getElementById('result-area');

  /* 1c. */
  const playBtn = document.getElementById('play-btn');

  /* This will help check your results */
  console.log(player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {
      player1Container.style.backgroundColor = "white";
      player2Container.style.backgroundColor = "white";
      player1Container.style.color = "black";
      player2Container.style.color = "black";
      /* 3a. */ return "Tie";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {
      player1Container.style.backgroundColor = "green";
      player2Container.style.backgroundColor = "red";
      player1Container.style.color = "white";
      player2Container.style.color = "white";
      /* 3b. */ return `${player1Name.innerHTML } wins 🎉`;

    } else {
      player1Container.style.backgroundColor = "red";
      player2Container.style.backgroundColor = "green";
      player1Container.style.color = "white";
      player2Container.style.color = "white";
      /* 3c. */ return "I won 😈";

    }
  };

  const play = () => {
  let friend = 0;
    if(player1Name.innerHTML === "Player 1"){
      let name = prompt("What is your name?");
      if(name === null || name.length === 0){
        alert("Hello shy guy! Let's play 👀");
        player1Name.innerHTML = "Shy guy 🙈";
      } else {
        alert(`Hello ${name}! Let's play 👀`);
        player1Name.innerHTML = name;
      }
    };

    choice1 = prompt("rock, paper or scissor?");
    if(choice1 === "rock"){
      choice1 = '✊';
    } else if (choice1 === "paper"){
      choice1 = '🤚';
    } else if (choice1 === "scissor"){
      choice1 = '✌️';
    } else {
      alert("Alright, we will pick a random choice for you!")
      choice1 = generateChoice();
    }
    choice2 = generateChoice();
  
    let result = decideWinner(choice1, choice2);

    insertHTML(choice1, choice2, result);
  };

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. */
  playBtn.addEventListener("click",play);
/* ------------------------------- */

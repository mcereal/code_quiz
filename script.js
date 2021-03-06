$(document).ready(function () {
  const questions = {
    question1: {
      questionID: 1,
      questionText: ["Which of these is not a Data type in Javascript?"],
      questionOptions: {
        optionA: "1. Booleans",
        optionB: "2. String",
        optionC: "3. Parameters",
        optionD: "4. Numbers",
      },
      questionAnswer: "optionC",
    },
    question2: {
      questionID: 2,
      questionText: [
        "Which of these is not an Arithmetic Operator in Javascript?",
      ],
      questionOptions: {
        optionA: "1. **",
        optionB: "2. //",
        optionC: "3. ++",
        optionD: "4. --",
      },
      questionAnswer: "optionB",
    },
    question3: {
      questionID: 3,
      questionText: ["Which option is a Semantic Element in HTML?"],
      questionOptions: {
        optionA: "1. figcaption",
        optionB: "2. sidebar",
        optionC: "3. content",
        optionD: "4. cover",
      },
      questionAnswer: "optionA",
    },
    question4: {
      questionID: 4,
      questionText: ["Which formating element italisizes text?"],
      questionOptions: {
        optionA: "1. ital",
        optionB: "2. it",
        optionC: "3. italic",
        optionD: "4. i",
      },
      questionAnswer: "optionD",
    },
    question5: {
      questionID: 5,
      questionText: ["Which of these is not part of the CSS Box Model?"],
      questionOptions: {
        optionA: "1. Content",
        optionB: "2. Outline",
        optionC: "3. Padding",
        optionD: "4. Border",
      },
      questionAnswer: "optionB",
    },
    question6: {
      questionID: 6,
      questionText: ["Select the option that is a flex container property"],
      questionOptions: {
        optionA: "1. align-border",
        optionB: "2. flex-flow",
        optionC: "3. flex-border",
        optionD: "4. justify-border",
      },
      questionAnswer: "optionB",
    },
  };

  //variables for id storage, timer , and wrong answer count
  const timer = document.querySelector("#timer");
  const startButton = document.querySelector("#startButton");
  const questionView = document.querySelector("#questionView");
  const titleView = document.querySelector("#titleView");
  const resultsView = document.querySelector("#resultsView");
  const submitHighscoresBtn = document.querySelector("#submitHighscoresBtn");
  const backBtn = document.querySelector("#backBtn");
  const clearBtn = document.querySelector("#clearBtn");
  const scoreText = document.querySelector("#scoreText");
  const highscoresList = document.querySelector("#highscoresList");
  const viewHighscores = document.querySelector("#viewHighscores");
  const objectKeys = Object.keys(questions);
  const optionA = document.querySelector("#optionA");
  const optionB = document.querySelector("#optionB");
  const optionC = document.querySelector("#optionC");
  const optionD = document.querySelector("#optionD");
  const correct = document.querySelector("#correct");
  const wrong = document.querySelector("#wrong");
  let secondsLeft = 60;
  let finalTime = 0;
  let questionIndex = 0;
  let wrongAnswer = 0;

  //60 second timer
  function setTime() {
    window.timerInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  //listerner for start button that starts timer and loads questions
  startButton.addEventListener("click", function (event) {
    titleView.classList.add("hidden");
    questionView.classList.remove("hidden");
    correct.classList.add("hidden");
    wrong.classList.add("hidden");
    wrongAnswer = 0;
    rightAnswer = 0;
    setTime();
    viewLoader(objectKeys[questionIndex]);
  });

  //listerner for button that stores high scores in local storage
  submitHighscoresBtn.addEventListener("click", function (event) {
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    storeScore(document.getElementById("initialEntry").value);
    highscoresRender();
  });

  //listener for button that goes back to start page
  backBtn.addEventListener("click", function (event) {
    clearInterval(timerInterval);
    secondsLeft = 60;
    highscoresView.classList.add("hidden");
    titleView.classList.remove("hidden");
    secondsLeft = 60;
  });

  //empties local storage
  clearBtn.addEventListener("click", function (event) {
    removeAllChildNodes(highscoresList);
    window.localStorage.clear();
  });

  //shows the high scores view
  viewHighscores.addEventListener("click", function (event) {
    titleView.classList.add("hidden");
    questionView.classList.add("hidden");
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    timer.textContent = "Time: ";
    clearInterval(timerInterval);
    secondsLeft = 60;
  });

  //event listeners for answer selection buttons
  questionView.addEventListener("click", function (event) {
    optionClickHandler(event.target.id, objectKeys[questionIndex]);
  });

  //loads questions into current view
  function viewLoader(questionNumber) {
    const question = document.querySelector("#question");
    question.textContent = questions[questionNumber].questionText;
    optionA.textContent = questions[questionNumber].questionOptions.optionA;
    optionB.textContent = questions[questionNumber].questionOptions.optionB;
    optionC.textContent = questions[questionNumber].questionOptions.optionC;
    optionD.textContent = questions[questionNumber].questionOptions.optionD;
  }

  //validates user question selection, stops the timer and shows results
  function optionClickHandler(i, questionNumber) {
    if (questionIndex < 5) {
      correct.classList.add("hidden");
      wrong.classList.add("hidden");
      if (i === questions[questionNumber].questionAnswer) {
        correct.classList.remove("hidden");
        questionIndex++;
      } else {
        wrong.classList.remove("hidden");
        wrongAnswer++;
        questionIndex++;
      }
    } else {
      questionView.classList.add("hidden");
      resultsView.classList.remove("hidden");
      questionIndex = 0;
      finalTime = secondsLeft;
      clearInterval(timerInterval);
      secondsLeft = 60;
      let score = finalScore();
      scoreText.textContent = `Your final score is: ${score}`;
    }
    viewLoader(objectKeys[questionIndex]);
  }

  //calculates the final score
  function finalScore() {
    return finalTime - 3 * wrongAnswer;
  }

  //writes user initials along with final score to localStorage
  function storeScore(initials) {
    localStorage.setItem(initials, finalScore());
  }

  //sorts values in local storage  from highest to lowest
  function sortValues() {
    return Object.values(localStorage).sort((a, b) => b - a);
  }

  //finds a key associated with a specific value
  function getKeyByValue(object, value) {
    return Object.entries(object).find((i) => i[1] === value);
  }

  //creates an object literal containg user initials and sorted by values
  function sortedScores() {
    let newObjectMap = new Map();
    for (value in sortValues()) {
      let keyValue = getKeyByValue(localStorage, sortValues()[value]);
      newObjectMap[keyValue[0]] = keyValue[1];
    }
    return newObjectMap;
  }
  //pulls highscores from localStorage and writes them to page
  function highscoresRender() {
    for (const [key, value] of Object.entries(sortedScores())) {
      const newElement = document.createElement("li");
      highscoresList.appendChild(newElement);
      newElement.textContent = `${key}: ${value}`;
    }
    console.log(sortedScores());
  }

  //used to delete scores from localStorage
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
});

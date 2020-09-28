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
      questionAnswer: 2,
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
      questionAnswer: 1,
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
      questionAnswer: 0,
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
      questionAnswer: 3,
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
      questionAnswer: 1,
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
      questionAnswer: 1,
    },
  };

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
  let secondsLeft = 60;
  let finalTime = 0;
  let questionIndex = 0;
  let wrongAnswer = 0;
  let rightAnswer = 0;

  function setTime() {
    window.timerInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  startButton.addEventListener("click", function (event) {
    titleView.classList.add("hidden");
    questionView.classList.remove("hidden");
    wrongAnswer = 0;
    rightAnswer = 0;
    setTime();
    viewLoader(objectKeys[questionIndex]);
  });

  submitHighscoresBtn.addEventListener("click", function (event) {
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    storeScore(document.getElementById("initialEntry").value);
    highscoresRender();
  });

  backBtn.addEventListener("click", function (event) {
    clearInterval(timerInterval);
    secondsLeft = 60;
    highscoresView.classList.add("hidden");
    titleView.classList.remove("hidden");
    secondsLeft = 60;
  });

  clearBtn.addEventListener("click", function (event) {
    removeAllChildNodes(highscoresList);
    window.localStorage.clear();
  });

  viewHighscores.addEventListener("click", function (event) {
    titleView.classList.add("hidden");
    questionView.classList.add("hidden");
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    timer.textContent = "Time: ";
    clearInterval(timerInterval);
    secondsLeft = 60;
  });

  optionA.addEventListener("click", function (event) {
    optionClickHandler(0, objectKeys[questionIndex]);
  });
  optionB.addEventListener("click", function (event) {
    optionClickHandler(1, objectKeys[questionIndex]);
  });
  optionC.addEventListener("click", function (event) {
    optionClickHandler(2, objectKeys[questionIndex]);
  });
  optionD.addEventListener("click", function (event) {
    optionClickHandler(3, objectKeys[questionIndex]);
  });

  function viewLoader(questionNumber) {
    const question = document.querySelector("#question");
    question.textContent = questions[questionNumber].questionText;
    optionA.textContent = questions[questionNumber].questionOptions.optionA;
    optionB.textContent = questions[questionNumber].questionOptions.optionB;
    optionC.textContent = questions[questionNumber].questionOptions.optionC;
    optionD.textContent = questions[questionNumber].questionOptions.optionD;
  }

  function optionClickHandler(i, questionNumber) {
    if (questionIndex < 5) {
      if (i === questions[questionNumber].questionAnswer) {
        rightAnswer++;
        questionIndex++;
      } else {
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

  function finalScore() {
    return finalTime - 3 * wrongAnswer;
  }

  function storeScore(initials) {
    localStorage.setItem(initials, finalScore());
  }

  function highscoresRender() {
    for (const [key, value] of Object.entries(localStorage)) {
      const newElement = document.createElement("li");
      highscoresList.appendChild(newElement);
      newElement.textContent = `${key}: ${value}`;
    }
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
});

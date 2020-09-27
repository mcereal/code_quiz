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

  const startButton = document.querySelector("#startButton");
  const questionView = document.querySelector("#questionView");
  const titleView = document.querySelector("#titleView");
  const resultsView = document.querySelector("#resultsView");
  const submitHighscoresBtn = document.querySelector("#submitHighscoresBtn");
  const backBtn = document.querySelector("#backBtn");
  const clearBtn = document.querySelector("#clearBtn");
  let wrongAnswer = 0;
  let rightAnswer = 0;

  startButton.addEventListener("click", function (event) {
    titleView.classList.add("hidden");
    questionView.classList.remove("hidden");
    viewLoader();
  });

  submitHighscoresBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    resultsView.classList.add("hidden");
    highscoresView.classList.remove("hidden");
    console.log(wrongAnswer);
  });

  backBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    highscoresView.classList.add("hidden");
    titleView.classList.remove("hidden");
  });

  function viewLoader() {
    console.log("test");
    const questionKeys = Object.entries(questions);
    for (value in questionKeys) {
      console.log(value);
      const question = document.querySelector("#question");
      question.textContent = questions[questionsKeys[value]].questionText;
      optionA.textContent =
        questions[questionsKeys[value]].questionOptions.optionA;
      optionB.textContent =
        questions[questionsKeys[value]].questionOptions.optionB;
      optionC.textContent =
        questions[questionsKeys[value]].questionOptions.optionC;
      optionD.textContent =
        questions[questionsKeys[value]].questionOptions.optionD;
      const lis = document.getElementsByTagName("li");
      for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", function (event) {
          event.stopPropagation();
          optionClickHandler(i, value);
        });
      }
    }
  }

  function optionClickHandler(i, questionNumber) {
    if (questionNumber === "question1") {
      console.log(questionNumber);
      if (i === questions[questionNumber].questionAnswer) {
        console.log("this is correct");
        rightAnswer++;
        // viewLoader("question2");
      } else {
        wrongAnswer++;
        // viewLoader("question2");
        console.log("this is incorrect");
      }
    } else if (questionNumber === "question2") {
      if (i === questions[questionNumber].questionAnswer) {
        rightAnswer++;
        // viewLoader("question3");
        // console.log("this is correct");
      } else {
        wrongAnswer++;
        // viewLoader("question3");
        // console.log("this is incorrect");
      }
    } else if (questionNumber === "question3") {
      if (i === questions[questionNumber].questionAnswer) {
        rightAnswer++;
        // viewLoader("question4");
        // console.log("this is correct");
      } else {
        wrongAnswer++;
        // viewLoader("question4");
        // console.log("this is incorrect");
      }
    } else if (questionNumber === "question4") {
      if (i === questions[questionNumber].questionAnswer) {
        rightAnswer++;
        // viewLoader("question5");
        // console.log("this is correct");
      } else {
        // viewLoader("question5");
        wrongAnswer++;
        // console.log("this is incorrect");
      }
    } else if (questionNumber === "question5") {
      if (i === questions[questionNumber].questionAnswer) {
        rightAnswer++;
        // viewLoader("question6");
        // console.log("this is correct");
      } else {
        wrongAnswer++;
        // viewLoader("question6");
        // console.log("this is incorrect");
      }
    } else {
      if (i === questions[questionNumber].questionAnswer) {
        rightAnswer++;
        questionView.classList.add("hidden");
        resultsView.classList.remove("hidden");
        // console.log("this is correct");
      } else {
        wrongAnswer++;
        questionView.classList.add("hidden");
        resultsView.classList.remove("hidden");
        // console.log("this is incorrect");
      }
    }
  }
});

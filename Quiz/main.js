/*You have to design an Online Quiz using OOP style. The app consists of 3 mains parts (see below figure)
1. The title: JavaScript Online Quiz
2. The Question Container which contains the Question and a list of choice. User can only choose 1 
answer from the list.
3. Button Group: Previous Question, Next Question, Submit */

var questions = [
  {
    title: "What is 1",
    answer: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
  },
  {
    title: "What is 2",
    answer: {
      a: "3",
      b: "52",
      c: "115",
    },
    correctAnswer: "a",
  },
  {
    title: "What is 3",
    answer: {
      a: "3",
      b: "53",
      c: "115",
    },
    correctAnswer: "c",
  },
];

let form = document.querySelector(".form_question");
let tittle = document.querySelector(".title_question");
let answers = document.querySelector(".answer");
let choices = document.getElementsByName("choice");
let submitBtn = document.querySelector("submitBtn");
let result = document.querySelector(".result");
var pos = 0;
var index = 0;
var point = 0;
let chA, chB, chC, choice;

function renderQuestion(pos) {
  if (pos >= questions.length) {
    result.innerHTML = `<h2>Correct ${point} / ${questions.length}</h2>`;
    document.querySelector(".form_question").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    pos = 0;
    point = 0;
    return false;
  }
  tittle = questions[pos].title;
  form.innerHTML = `<h2 class="title_question">${tittle}</h2>`;
  chA = questions[pos].answer.a;
  chB = questions[pos].answer.b;
  chC = questions[pos].answer.c;
  form.innerHTML +=
    "<input type='radio' name='choice' value='a'> " + chA + "<br>";
  form.innerHTML +=
    "<input type='radio' name='choice' value='b'> " + chB + "<br>";
  form.innerHTML +=
    "<input type='radio' name='choice' value='c'> " + chC + "<br><br>";
}

function checkResult() {
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
      if (choice === questions[pos].correctAnswer) {
        point++;
      }
    }
  }
  pos++;
  renderQuestion(pos);
}
function next() {
  checkResult();
  index++;
  if (index >= questions.length) {
    index = questions.length - 1;
  }
  renderQuestion(index);
}

function prev() {
  index--;
  if (index < 0) {
    index = 0;
  }
  renderQuestion(index);
  // checkResult();
}

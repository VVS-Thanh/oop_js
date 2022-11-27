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
    answerSeleted: null
  },
  {
    title: "What is 2",
    answer: {
      a: "3",
      b: "52",
      c: "115",
    },
    correctAnswer: "a",
    answerSeleted: null
  },
  {
    title: "What is 3",
    answer: {
      a: "3",
      b: "53",
      c: "115",
    },
    correctAnswer: "c",
    answerSeleted: null
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
function selectAnswer(elementSelected) {
  const value = elementSelected.value;
  questions[index].answerSeleted = value
  elementSelected.checked = 'checked'
}

function renderQuestion(pos) {


  tittle = questions[pos].title;
  form.innerHTML = `<h2 class="title_question">${tittle}</h2>`;

  if (pos === 0) {
    document.getElementById("backBtn").style.display = "none";
  } else {
    document.getElementById("backBtn").style.display = "block";
  }
  if (pos === questions.length - 1) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "block";
  }


  for (const answer in questions[pos].answer) {
    const checked = questions[pos].answerSeleted === questions[pos].answer[answer]
    if (checked) {
      form.innerHTML +=
        `<input 
          type='radio' 
          name='choice' 
          id=${questions[pos].answer[answer]}
          value=${questions[pos].answer[answer]} 
          checked
          onchange="selectAnswer(this)"
          > 
          ${questions[pos].answer[answer]} <br>`;

    } else {
      form.innerHTML +=
        `<input 
          type='radio' 
          name='choice' 
          id=${questions[pos].answer[answer]}
          value=${questions[pos].answer[answer]} 
          onchange="selectAnswer(this)"
          > 
          ${questions[pos].answer[answer]} <br>`;
    }

  }

}

function submitAnswer(mark) {

  result.innerHTML = `<h2>Correct ${mark} / ${questions.length}</h2>`;
  document.querySelector(".form_question").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
}

function checkResult() {
  const noAnswer = questions.filter(el => el.answerSeleted)
  if (noAnswer.length !== questions.length) {
    alert('please choose the anser')
    return
  }
  const mark = questions.reduce((pre, current) => {
    if (current.answerSeleted.trim() === current.answer[current.correctAnswer].trim()) {
      pre += 1
    }
    return pre
  }, 0)

  submitAnswer(mark);
}
function next() {
  // checkResult();
  index++;
  // if (index >= questions.length) {
  //   index = questions.length - 1;
  // }
  renderQuestion(index);
}

function prev() {
  index--;
  // if (index < 0) {
  //   index = 0;
  // }
  renderQuestion(index);
  // checkResult();
}
